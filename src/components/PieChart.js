import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

export default function PieChart({
    not_at_risk = 0,
    potentialriskemployees = 0
}) {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);
    const [legendItems, setLegendItems] = useState([]);

    const toNumber = (value) => {
        if (value === null || value === undefined) return 0;
        if (typeof value === "string") {
            return Number(value.replace(/,/g, "").replace("%", ""));
        }
        return Number(value);
    };

    useEffect(() => {
        const safe = toNumber(not_at_risk);
        const risk = toNumber(potentialriskemployees);

        const labels = ["Not At Risk", "At Risk"];
        const values = [safe, risk];
        const colors = ["#617d8c", "#891a10"];

        const total = safe + risk;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext("2d");

        chartRef.current = new Chart(ctx, {
            type: "pie",
            data: {
                labels,
                datasets: [
                    {
                        data: values,
                        backgroundColor: colors,
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                },
            },
        });

        const items = labels.map((label, i) => {
            const value = values[i];
            const percent = total
                ? Math.round((value / total) * 100)
                : 0;

            return {
                label,
                value,
                percent,
                color: colors[i],
            };
        });

        setLegendItems(items);

        return () => chartRef.current?.destroy();
    }, [not_at_risk, potentialriskemployees]);

    return (
        <div className="mx-auto">
            <div className="w-[200px] h-[200px] mx-auto">
                <canvas ref={canvasRef} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                {legendItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <svg width="110" height="26">
                            <rect width="110" height="26" rx="8" fill={item.color} />
                            <text
                                x="55"
                                y="18"
                                textAnchor="middle"
                                fill="#fff"
                                fontSize="14"
                                fontWeight="600"
                            >
                                {item.value} ({item.percent}%)
                            </text>
                        </svg>

                        <div className="mt-1 text-gray-700 text-sm">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
