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
        setTimeout(() => {
            if (!reportRef.current) return;

            const opt = {
                margin: 0,
                filename: 'summary-report.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
            };

            html2pdf()
                .from(reportRef.current)
                .set(opt)
                .outputPdf('bloburl')
                .then((pdfUrl) => {
                    window.open(pdfUrl, '_blank');
                });

        }, 1500);
    }, []);


    return (
        
        <div ref={reportRef} className="bg-white">

            {/* PAGE 1 */}
            <div className="print-page mx-auto max-w-[1440px] p-6">
                <ReportHeader />

                <div className="text-center mt-4 mb-6">
                    <h2 className="text-2xl font-medium">
                        Estimated Risk | Cost Centre Loss
                    </h2>

                    <div className="mt-3 text-4xl font-extrabold text-red-700">
                        $2,224,475.00
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                    <div className="p-4 border rounded-xl flex items-center justify-between">
                        <div className="flex flex-col items-center">
                            NPS
                            <span className="border rounded-lg p-2">75%</span>
                        </div>

                        <PieChart />

                        <div className="flex flex-col items-center">
                            KPI %
                            <span className="border rounded-lg p-2">75%</span>
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

            {/* PAGE 2 */}
            <div className="print-page mx-auto max-w-[1440px] p-6">
                <ReportHeader />

                <div className="text-center mt-2 mb-6">
                    <h2 className="text-2xl font-medium">Top 10 Criteria</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <BarChart />
                    <BarChart />
                </div>
            </div>

            {/* PAGE 3 */}
            <div className="print-page mx-auto max-w-[1440px] p-6">
                <ReportHeader />

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
