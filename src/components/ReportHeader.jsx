import CountBadge from "../components/CountBadge";


export default function ReportHeader({
    title,
    printedDate, 
    reviewType,
    completed = 0,
    pending = 0,
    riskLevel = "High"
}) {
    return (
        <div className="grid font-sans text-black">

            {/* Row 1 */}
            <div className="grid grid-cols-12 items-center">
                {/* Centered title */}
                <div className="col-span-8 col-start-3 text-2xl font-semibold text-center">
                    {title}
                </div>

                {/* Right aligned date */}
                <div className="col-span-2 col-start-11 text-sm whitespace-nowrap justify-self-end">
                    Printed: {printedDate}
                </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-[1fr_auto] items-center ">
                <div className="text-2xl font-semibold">
                   {reviewType}
                </div>

                <div className="text-2xl font-semibold">
                    Risk Cost Centre Report:
                </div>
            </div>

            <div className="border-b-2 border-red-800 h-4">
                &nbsp;
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-[1fr_auto] items-center mt-1 leading-none">
                <div className="text-2xl font-semibold">
                    Review Totals - ALL LEVELS
                </div>

                <div className="flex text-2xl gap-2 items-center  ">
                    <span className="font-bold">Review Total:</span>

                    <span>
                        Completed: <span className="font-extrabold text-3xl" style={{ color: "#16a34a" }}>{completed}</span>
                    </span>

                    <span>
                        Pending: <span className="font-extrabold text-3xl" style={{ color: "#ffc107" }}>{pending}</span>
                    </span> 
                </div>
            </div>

            {/* Risk Level */}
            <div className="text-2xl font-semibold mt-1 text-right">
                Risk Level:{" "}
                <span
                    className={`${riskLevel === "High" ? "text-red-600" : "text-green-600"} font-extrabold`}
                >
                    {riskLevel}
                </span>

            </div>

        </div>
    );
}
