export default function StaffReplacementCosts() {
    return (
        <div className="">

            {/* TITLE */}
            <div className="text-center text-lg font-semibold mb-4">
                Staff Replacement Costs
            </div>

            {/* ROWS */}
            <div className="grid grid-cols-2 gap-y-1">

                <div>Ind. Replacement Cost:</div>
                <div className="text-right">$ 20,000.00</div>

                <div>Avg. Staff Turnover:</div>
                <div className="text-right">15%</div>

                <div>At Risk Potential Loss:</div>
                <div className="text-right">$ 3,660,000.00</div>

                {/* Bold rows */}
                <div className="font-semibold">Staff at T/O Rate:</div>
                <div className="text-right font-semibold">27.45</div>

                <div className="font-semibold">Cost at T/O Rate:</div>
                <div className="text-right font-semibold">$ 549,000.00</div>
            </div>

            {/* BOTTOM RED ROW */}
            <div className="mt-4 grid grid-cols-2">
                <div className="font-semibold text-red-700">Review Causality $:</div>
                <div className="text-right font-semibold text-red-700">$ 329,400.00</div>
            </div>

        </div>
    );
}
