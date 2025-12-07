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
                            className="w-28 h-28 rounded-full flex flex-col items-center justify-center border-4"
                            style={{ borderColor: item.color }}
                        >
                            <div className="text-xl font-semibold text-gray-700">
                                {item.percent}%
                            </div>

                            <div className="text-lg font-bold" style={{ color: item.color }}>
                                {item.count}
                            </div>
                        </div>

                        

                        {/* COST LABEL */}
                        <div className="text-size-xxs mt-1">
                            Lost Productivity Cost:
                        </div>

                        {/* COST BADGE */}
                        <div
                            className="mt-1 px-3 py-1 rounded-md text-white font-semibold text-sm"
                            style={{ backgroundColor: item.costBg }}
                        >
                            {item.cost}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
