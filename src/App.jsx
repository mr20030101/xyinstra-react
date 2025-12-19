import { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import PieChart from "./components/PieChart";
import RiskSummary from "./components/RiskSummary";
import StaffReplacementCosts from "./components/StaffReplacementCosts";
import BarChart from "./components/BarChart";
import ReportHeader from "./components/ReportHeader";

 
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


    // 1️⃣ Fetch API data
    useEffect(() => {
        async function fetchReport() {
            try {
                const rcode = new URLSearchParams(window.location.search).get("rcode");
 
                const res = await fetch(
                    `${API_BASE_URL}/reports/result-summary-report?rcode=${rcode}&type=baseline`
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
    }, []);

    // Loading state
    if (loading) {
        return <div className="p-6">Loading report...</div>;
    }

    // Safety check
    const header = data?.data?.header;

    if (!header) {
        return <div className="p-6">No header data available</div>;
    }

    // Extract API fields
    const {
        report_title,
        report_date,
        review_title,
        review_test_taken,
        review_test_pending
    } = header;
 
 
    const summary = data?.data?.companysummary ?? {};

    const est_baseline_cost = formatMoney(summary.est_baseline_cost);
 

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (!reportRef.current) return;

    //         const opt = {
    //             margin: 0,
    //             filename: 'summary-report.pdf',
    //             image: { type: 'jpeg', quality: 0.98 },
    //             html2canvas: {
    //                 scale: 2,
    //                 useCORS: true
    //             },
    //             jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    //         };

    //         html2pdf()
    //             .from(reportRef.current)
    //             .set(opt)
    //             .outputPdf('bloburl')
    //             .then((pdfUrl) => {
    //                 window.open(pdfUrl, '_blank');
    //             });

    //     }, 1500);
    // }, []);

    
    const NAT = summary.not_at_risk 
    const PRE = summary.potentialriskemployees

    const kpis = summary.kpis || [];
    const nps  = summary.NPS || [];
 

    return (
        
        <div ref={reportRef} className="bg-white">

            {/* PAGE 1 */}
            <div className="print-page mx-auto max-w-[1440px] h-[210mm] p-6">
                
                <ReportHeader
                    title={report_title}
                    printedDate={report_date} 
                    reviewType={review_title}
                    completed={review_test_taken}
                    pending={review_test_pending}
                    riskLevel="High"
                />

                <div className="text-center mt-4 mb-12">
                    <h2 className="text-2xl font-medium">
                        Estimated Risk | Cost Centre Loss
                    </h2>

                    <div className="mt-3 text-4xl font-extrabold text-red-700">
                        ${est_baseline_cost}
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="p-4 border rounded-xl flex items-center justify-between">
                        <div className="flex flex-col items-center">
                            eNPS
                            <span className="border rounded-lg p-2" style={{ color: nps.color, borderColor: nps.color }}>{nps.score}</span>
                        </div>

                        <PieChart 
                            not_at_risk = {NAT} 
                            potentialriskemployees = {PRE} 
                        />

                        <div className="flex flex-col items-center">
                            KPI %
                            <span className="border rounded-lg p-2"> {kpis["single-review"]} </span>
                        </div>
                    </div>

                    <div className="p-4 border rounded-xl">
                        <RiskSummary
                            currency="$"
                            summary={summary}
                        />
                    </div>
 
                    <StaffReplacementCosts
                        currency="$"
                        summary = {summary}
                    /> 
                </div>
            </div>

            {/* PAGE 2 */}
            <div className="print-page mx-auto max-w-[1440px] h-[210mm] p-6">
                <ReportHeader
                    title={report_title}
                    printedDate={report_date}
                    reviewType={review_title}
                    completed={review_test_taken}
                    pending={review_test_pending}
                    riskLevel="High"
                />


                <div className="text-center mt-2 mb-6">
                    <h2 className="text-2xl font-medium">Top 10 Criteria</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <BarChart />
                    <BarChart />
                </div>
            </div>

            {/* PAGE 3 */}
            <div className="print-page mx-auto max-w-[1440px] h-[210mm] p-6">
                <ReportHeader
                    title={report_title}
                    printedDate={report_date}
                    reviewType={review_title}
                    completed={review_test_taken}
                    pending={review_test_pending}
                    riskLevel="High"
                />


                <div className="text-center mt-2 mb-6">
                    <h2 className="text-2xl font-medium">
                        Top 10 UNFULFILLED Criteria
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <BarChart />
                    <BarChart />
                </div>
            </div>

        </div>

    );
}
