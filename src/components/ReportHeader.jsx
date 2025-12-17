export default function RiskSummary() {
    return (
        <>
            {/* Report Header */}
            <div className="grid font-sans text-black">

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
                        ABC Group - LEADERSHIP EFFECTIVENESS - Review
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

                    <div className="flex justify-between gap-2 items-center">
                        <span className="font-bold">Review Total: </span>

                        <span className="">Completed: </span>

                        <svg width="36" height="26">
                            <rect width="36" height="26" rx="6" fill="#16a34a" />
                            <text x="18" y="18" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">
                                321
                            </text>
                        </svg>


                        <span className="">Pending:</span>

                        <svg width="36" height="26">
                            <rect width="36" height="26" rx="6" fill="#16a34a" />
                            <text x="18" y="18" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">
                                16
                            </text>
                        </svg>
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