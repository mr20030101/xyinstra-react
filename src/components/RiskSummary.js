import CountBadge from "../components/CountBadge";
import Ring from "../components/Ring";

export default function RiskSummary({
    currency = "$",
    summary
}) {

    // 🔒 Safety: handle missing summary
    if (!summary) {
        return null;
    }

    // --- Raw counts ---
    const AD = Number(summary.activelydisengaged ?? 0);
    const D = Number(summary.disengaged ?? 0);
    const PD = Number(summary.partiallydisengaged ?? 0);

    // --- Raw costs ---
    const dl = summary.disengagement_loss;
    const ddl = summary.disengaged_disengagement_loss;
    const pdl = summary.partially_disengagement_loss;

    // --- Helpers ---
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

    // --- Percentage calculation ---
    const total = AD + D + PD;

    const calcPercent = (value) => {
        if (!total) return 0;
        return Math.round((value / total) * 100);
    };

    // --- Final display data ---
    const data = [
        {
            label: "Actively Disengaged",
            percent: calcPercent(AD),
            count: AD,
            cost: `${currency} ${formatMoney(dl)}`,
            color: "#9B1C1C",
            costBg: "#C53030"
        },
        {
            label: "Disengaged",
            percent: calcPercent(D),
            count: D,
            cost: `${currency} ${formatMoney(ddl)}`,
            color: "#C05621",
            costBg: "#ED8936"
        },
        {
            label: "Partially Disengaged",
            percent: calcPercent(PD),
            count: PD,
            cost: `${currency} ${formatMoney(pdl)}`,
            color: "#2B6CB0",
            costBg: "#3182CE"
        }
    ];

    return (
        <div className="text-center">
            <div className="text-lg font-semibold mb-4">
                Cost Centre Risk Summary Estimates:
            </div>

            <div className="grid grid-cols-3 gap-2">
                {data.map((item, idx) => (
                    <div key={idx} className="flex justify-evenly flex-col gap-3 items-center">

                        {/* LABEL */}
                        <div className="my-2 small h-9" style={{ color: item.color }}>
                            {item.label}:
                        </div>

                        <Ring percent={item.percent} count={item.count} color={item.color} />


                        <div className="flex flex-col items-center gap-2">
                            {/* COST LABEL */}
                            <div className="text-xs mt-1" style={{ color: item.color }}>
                                Lost Productivity Cost:
                            </div>

                            <CountBadge
                                fontSize={16}
                                bgColor={item.costBg}
                                width={120}
                                value={item.cost}
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
