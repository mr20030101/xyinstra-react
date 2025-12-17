export default function RiskSummary() {
    return (
        <>
            {/* Report Header */}
            <div className="grid gap-2  p-4 font-sans text-black">

                {/* Row 1 */}
                <div className="grid grid-cols-12 items-center">
                    {/* Centered title */}
                    <div className="col-span-8 col-start-3 text-2xl font-semibold text-center">
                        Review Summary Report [LEADERSHIP]
                    </div>

                    {/* Right aligned date */}
                    <div className="col-span-2 col-start-11 text-sm whitespace-nowrap justify-self-end">
                        Printed: 04/10/2025
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-[1fr_auto] items-center border-b-2 border-red-800 pb-1.5">
                    <div className="text-2xl font-semibold">
                        : ABC Group - LEADERSHIP EFFECTIVENESS - Review
                    </div>

                    <div className="text-2xl font-semibold">
                        Risk Cost Centre Report:
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-[1fr_auto] items-center mt-1">
                    <div className="text-2xl font-semibold">
                        Review Totals - ALL LEVELS
                    </div>

                    <div className="grid grid-flow-col items-center gap-2 text-sm">
                        <span>Review Total: Completed:</span>

                        <span className="inline-block min-w-[36px] h-[22px] 
                     rounded-full bg-green-600 
                     text-[11px] font-semibold text-white 
                     leading-[22px] text-center">
                            321
                        </span>

                        <span>Pending:</span>

                        <span className="inline-block min-w-[36px] h-[22px] 
                     rounded-full bg-yellow-400 
                     text-[11px] font-semibold text-black 
                     leading-[22px] text-center">
                            16
                        </span>
                    </div>

                </div>

                {/* Risk Level */}
                <div className="text-sm font-semibold mt-1 text-right">
                    Risk Level: <span className="text-red-600">High</span>
                </div>

            </div>
        </>
    )
}