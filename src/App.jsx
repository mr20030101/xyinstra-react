import { useEffect, useRef } from "react"; 
import html2pdf from "html2pdf.js";
import PieChart from "./components/PieChart";
import RiskSummary from "./components/RiskSummary";
import StaffReplacementCosts from "./components/StaffReplacementCosts";
import BarChart from "./components/BarChart";
import ReportHeader from "./components/ReportHeader";

 
export default function SummaryLayout() {

    const reportRef = useRef(null);

    useEffect(() => {
        // AUTO GENERATE PDF AFTER EVERYTHING IS LOADED
        setTimeout(() => {
            if (reportRef.current) {
                const opt = {
                    margin: 0,
                    filename: 'summary-report.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 4 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
                };

                html2pdf().from(reportRef.current).set(opt).save();
            }
        }, 1500); // wait for charts & layout
    }, []);

    return (
        <div ref={reportRef} className="min-h-screen bg-white p-6">

            {/* PAGE 1 START */}
            <div className="print-page mx-auto max-w-[1440px]">

                <ReportHeader />

                {/* Estimated Risk Cost */}
                <div className="text-center mt-4 mb-6">
                    <h2 className="text-2xl font-medium">Estimated Risk | Cost Centre Loss</h2>

                    <div className="mt-3 text-4xl font-extrabold text-red-700">
                        $2,224,475.00
                    </div>
                </div>

                {/* PLACEHOLDER FOR YOUR PANELS / GRAPHS / BOXES */}
                <div className="mt-10">
                    {/* <div className="text-center text-gray-400">
                        (Charts / Panels / Boxes go here…)
                    </div> */}

                    <div className="grid grid-cols-3 gap-3">
                        <div className="p-4 border rounded-xl flex items-center justify-between">
                            <div className="flex flex-col items-center">
                                NPS

                                <span className="border rounded-lg p-2"> 
                                    75%
                                </span>
                            </div>
                            <div className="">
                                <PieChart />
                            </div>
                            <div className="flex flex-col items-center">
                                KPI %

                                <span className="border rounded-lg p-2">
                                    75%
                                </span>
                            </div>
                        </div>
                        <div className="p-4 border rounded-xl">
                            <RiskSummary />
                        </div>
                        <div className="p-4 border rounded-xl">
                            <StaffReplacementCosts /> 
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 START */}
            <div className="print-page mx-auto max-w-[1440px] mt-10 pt-10">

                {/* <ReportHeader /> */}

                {/* PLACEHOLDER FOR PAGE 2 CONTENT */}
                <div className="">
                    {/* Estimated Risk Cost */}
                    <div className="text-center mt-4 mb-6">
                        <h2 className="text-2xl font-medium">Top 10 Criteria</h2> 
                    </div>
                    <div className="text-center text-gray-400">
                       <div className="grid grid-cols-2">
                            <div>
                                <BarChart />
                            </div> 
                            <div>
                                <BarChart />
                            </div> 
                       </div>
                    </div>
                </div>
            </div>

            {/* PAGE 3 START */}
            <div className="print-page mx-auto max-w-[1440px] mt-10 pt-10">

                {/* <ReportHeader /> */}

                {/* PLACEHOLDER FOR PAGE 2 CONTENT */}
                <div className="">
                    <div className="text-center mt-4 mb-6">
                        <h2 className="text-2xl font-medium">Top 10 UNFULFILLED Criteria</h2>
                    </div>
                    <div className="text-center text-gray-400">
                       <div className="grid grid-cols-2">
                            <div>
                                <BarChart />
                            </div> 
                            <div>
                                <BarChart />
                            </div> 
                       </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
