export default function RiskSummary() {
    const data = [
        {
            label: "Actively Disengaged",
            percent: 38,
            count: 69,
            cost: "$ 1,198,925.00",
            color: "#9B1C1C",
            light: "#F8DADA",
            costBg: "#C53030"
        },
        {
            label: "Disengaged",
            percent: 25,
            count: 46,
            cost: "$ 508,300.00",
            color: "#C05621",
            light: "#FCE2C4",
            costBg: "#ED8936"
        },
        {
            label: "Partially Disengaged",
            percent: 37,
            count: 68,
            cost: "$ 187,850.00",
            color: "#2B6CB0",
            light: "#DBEAFE",
            costBg: "#3182CE"
        },
    ];

    return (
        <div className="text-center">
            <div className="text-lg font-semibold mb-4">
                RCC Risk Summary Estimates:
            </div>

            <div className="grid grid-cols-3 gap-2">
                {data.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-3 items-center">

                        {/* LABEL */}
                        <div className="mt-2 extra-small" style={{ color: item.color }}>
                            {item.label}:
                        </div>

                        {/* CIRCLE */}
                        <div
                            className="w-20 h-20 rounded-full flex flex-col items-center justify-center border-4"
                            style={{ borderColor: item.color }}
                        >
                            <div className="text-xs font-semibold text-gray-700">
                                {item.percent}%
                            </div>

                            <div className="font-bold text-xs" style={{ color: item.color }}>
                                {item.count}
                            </div>
                        </div>

                        

                        {/* COST LABEL */}
                        <div className="text-xxs mt-1">
                            Lost Productivity Cost:
                        </div>
 
                        {/* COST BADGE (SVG) */}
                        <svg
                            width="80"
                            height="25"
                            viewBox="0 0 80 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="80"
                                height="25"
                                rx="4"
                                fill={item.costBg}
                            />
                            <text
                                x="40"
                                y="14"
                                textAnchor="middle"
                                fill="#ffffff"
                                fontSize="12"
                                fontWeight="600"
                                style={{ fontFamily: "inherit" }}
                            >
                                {item.cost}
                            </text>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}
