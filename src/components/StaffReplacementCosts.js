export default function StaffReplacementCosts({
    currency = "$",
    summary
}) {
 
    // Ind Replacement Cost
    const IRC = summary.companydetails.replacementcost;

    // Avg Staff Turnover
    const AST = summary.companydetails.turnoverrate;

    // At Risk Potential Loss
    const ARPL = (summary.potentialriskemployees) * IRC;

    // Staff at T/O Rate
    const SATOR = summary.turnoverrate;

    // Cost at T/O Rate
    const CATOR = summary.cost_at_turn_over_rate;

    // Review Causality $
    const RC = summary.show_review_causality_value ? summary.review_causality_value : '';

 

    const toNumber = (value) => {
        if (value === null || value === undefined) return 0;
        if (typeof value === "string") {
            return Number(value.replace(/,/g, "").replace("%", ""));
        }
        return Number(value);
    };

    const formatMoney = (value) =>
        toNumber(value).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    return (
        <div className="">

            {/* TITLE */}
            <div className="text-center text-lg font-semibold mb-3">
                Staff Replacement Costs
            </div>

            <div className="space-y-1">

                <div className="flex justify-between">
                    <span>Ind. Replacement Cost:</span> 
                    <span>{currency}{formatMoney(IRC)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Avg. Staff Turnover:</span> 
                    <span>{AST}%</span>  
                </div>

                <div className="flex justify-between">
                    <span>At Risk Potential Loss:</span> 
                    <span>{currency}{formatMoney(ARPL)}</span>
                </div>

                <div className="flex justify-between font-semibold">
                    <span>Staff at T/O Rate:</span> 
                    <span>{SATOR}</span>
                </div>

                <div className="flex justify-between font-semibold">
                    <span>Cost at T/O Rate:</span> 
                    <span>{currency}{formatMoney(CATOR)}</span>
                </div>

                <div className="flex justify-between font-semibold text-red-700 pt-1">
                    <span>Review Causality $:</span> 
                    {RC !== '' && <span>{currency}{formatMoney(RC)}</span>} 
                </div>

            </div>
        </div>
    );
}
