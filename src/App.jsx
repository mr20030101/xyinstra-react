import { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import PieChart from "./components/PieChart";
import RiskSummary from "./components/RiskSummary";
import StaffReplacementCosts from "./components/StaffReplacementCosts";
import BarChart from "./components/BarChart";
import ReportHeader from "./components/ReportHeader";

/* =============================
   PAGE NUMBER COMPONENT
============================= */
function PageNumber({ page }) {
    return (
        <div className="absolute bottom-4 right-6 text-xs text-gray-500">
            Page {page}
        </div>
    );
}

export default function SummaryLayout() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const reportRef = useRef(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const formatMoney = (value) =>
        Number(value ?? 0).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
    });

    /* =============================
       FETCH API DATA
    ============================= */
    useEffect(() => {
        async function fetchReport() {
            try {
                const rcode = new URLSearchParams(window.location.search).get("rcode");
                const type = new URLSearchParams(window.location.search).get("type");
                const filter1 = new URLSearchParams(window.location.search).get("filter1");
                const filter2 = new URLSearchParams(window.location.search).get("filter2");

                const res = await fetch(
                    `${API_BASE_URL}/reports/result-summary-report?rcode=${rcode}&type=${type}&filter1=${filter1}&filter2=${filter2}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "X-API-KEY": process.env.REACT_APP_API_KEY
                        }
                    }
                );

                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error("Failed to load report data", err);
            } finally {
                setLoading(false);
            }
        }

        fetchReport();
    }, [API_BASE_URL]);

    /* =============================
       PDF GENERATION
    ============================= */
    useEffect(() => {
        setTimeout(() => {
            if (!reportRef.current) return;

            const printPage = reportRef.current.querySelector(".print-page");
            const originalHeight = printPage?.style.height;

            if (printPage) {
                printPage.style.height = "210mm";
            }

            const opt = {
                margin: 0,
                filename: "summary-report.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true
                },
                jsPDF: {
                    unit: "mm",
                    format: "a4",
                    orientation: "landscape"
                }
            };

            html2pdf()
                .from(reportRef.current)
                .set(opt)
                .outputPdf("bloburl")
                .then((pdfUrl) => {
                    if (printPage) {
                        printPage.style.height = originalHeight || "";
                    }
                    window.open(pdfUrl, "_blank");
                });
        }, 2000);
    }, []);

    /* =============================
       LOADING / SAFETY
    ============================= */
    if (loading) return <div className="p-6">Loading report...</div>;

    const header = data?.data?.header;
    if (!header) return <div className="p-6">No header data available</div>;

    const {
        report_title,
        report_date,
        review_title,
        review_test_taken,
        review_test_pending,
        review_level,
        risk_level,
    } = header;

    const summary = data?.data?.companysummary ?? {};
    const topValues = summary.topvalues ?? [];
    const topUnfulfilledValues = summary.topunfulfilledvalues ?? [];

    const testTaken = summary.teststaken ?? review_test_taken;

    // if (!topValues.length || !topUnfulfilledValues.length || !testTaken) {
    //     return <div className="p-6">No criteria data available</div>;
    // }

    /* =============================
       PAGE 1 DATA
    ============================= */
    const est_baseline_cost = formatMoney(summary.est_baseline_cost);
    const NAT = summary.not_at_risk;
    const PRE = summary.potentialriskemployees;
    const kpis = summary.kpis || [];
    const nps = summary.NPS || [];

    /* =============================
       TOP TEN CRITERIA
    ============================= */
    const tcLabels = topValues.map(i => i.name);
    const tcFulfilled = topValues.map(i => Number(i.frequency));
    const tcUnfulfilled = topValues.map(i => Number(i.notmetfrequency));

    const tucLabels = topUnfulfilledValues.map(i => i.name);
    const tucFulfilled = topUnfulfilledValues.map(i => Number(i.frequency));
    const tucUnfulfilled = topUnfulfilledValues.map(i => Number(i.notmetfrequency));

    const mid = Math.ceil(tcLabels.length / 2);

    const TTCF = {
        labels: tcLabels.slice(0, mid),
        fulfilled: tcFulfilled.slice(0, mid),
        unfulfilled: tcUnfulfilled.slice(0, mid)
    };

    const TTCS = {
        labels: tcLabels.slice(mid),
        fulfilled: tcFulfilled.slice(mid),
        unfulfilled: tcUnfulfilled.slice(mid)
    };

    const TUCFirst = {
        labels: tucLabels.slice(0, mid),
        fulfilled: tucFulfilled.slice(0, mid),
        unfulfilled: tucUnfulfilled.slice(0, mid)
    };

    const TUCSecond = {
        labels: tucLabels.slice(mid),
        fulfilled: tucFulfilled.slice(mid),
        unfulfilled: tucUnfulfilled.slice(mid)
    };

    /* =============================
       RENDER
    ============================= */
    return (
        <div ref={reportRef} className="bg-white">

            {/* PAGE 1 */}
            <div className="print-page relative mx-auto max-w-[1440px] h-[210mm] p-6">
                <ReportHeader
                    title={report_title}
                    printedDate={report_date}
                    reviewType={review_title}
                    completed={review_test_taken}
                    pending={review_test_pending}
                    reviewLevel={review_level}
                    riskLevel={risk_level}
                /> 

                <div className="text-center mt-4 mb-12">
                    <h2 className="text-3xl font-medium">
                        Estimated Risk | Cost Centre Loss
                    </h2>
                    <div className="mt-3 text-4xl font-extrabold text-red-700">
                        ${est_baseline_cost}
                    </div>
                </div>

                <div className="mt-5 flex justify-between gap-3">
                    <div className="flex-1 p-4 border rounded-xl flex items-center justify-between">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs">eNPS</span>
                            <svg width="40" height="32" viewBox="0 0 30 32">
                                <rect
                                    x="1"
                                    y="1"
                                    width="30"
                                    height="30"
                                    rx="8"
                                    fill="transparent"
                                    stroke={nps.color}
                                    strokeWidth="2"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill={nps.color}
                                    fontSize="14"
                                    fontWeight="600"
                                >
                                    {nps.score}
                                </text>
                            </svg>
                        </div>

                        <PieChart
                            not_at_risk={NAT}
                            potentialriskemployees={PRE}
                        />

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs">KPI %</span>
                            <svg width="40" height="32" viewBox="0 0 30 32">
                                <rect
                                    x="1"
                                    y="1"
                                    width="30"
                                    height="30"
                                    rx="8"
                                    fill="transparent"
                                    stroke="#000"
                                    strokeWidth="2"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="#000"
                                    fontSize="14"
                                    fontWeight="600"
                                >
                                    {kpis["single-review"]}
                                </text>
                            </svg>
                        </div>
                    </div>

                    <div className="w-[40%] p-4 border rounded-xl">
                        <RiskSummary currency="$" summary={summary} />
                    </div>

                    <div className="flex-1 p-4 border border-red-600 rounded-xl text-sm">
                        <StaffReplacementCosts currency="$" summary={summary} />
                    </div>
                </div>

                <PageNumber page={1} />
            </div>

            {/* PAGE 2 */}
            <div className="print-page relative mx-auto max-w-[1440px] h-[210mm] p-6">
                <ReportHeader
                    title={report_title}
                    printedDate={report_date}
                    reviewType={review_title}
                    completed={review_test_taken}
                    pending={review_test_pending}
                    reviewLevel={review_level}
                    riskLevel={risk_level}
                />

                <div className="text-center mt-2 mb-6">
                    <h2 className="text-2xl font-medium uppercase">Top 10 Criteria</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <BarChart {...TTCF} testTaken={testTaken} />
                    <BarChart {...TTCS} testTaken={testTaken} />
                </div>

                <PageNumber page={2} />
            </div>

            {/* PAGE 3 */}
            <div className="print-page relative mx-auto max-w-[1440px] h-[210mm] p-6">
                <ReportHeader
                    title={report_title}
                    printedDate={report_date}
                    reviewType={review_title}
                    completed={review_test_taken}
                    pending={review_test_pending}
                    reviewLevel={review_level}
                    riskLevel={risk_level}
                />

                <div className="text-center mt-2 mb-6">
                    <h2 className="text-2xl font-medium uppercase">
                        Other 10 UNFULFILLED Criteria
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <BarChart {...TUCFirst} testTaken={testTaken} />
                    <BarChart {...TUCSecond} testTaken={testTaken} />
                </div>

                <PageNumber page={3} />
            </div>

        </div>
    );
}
