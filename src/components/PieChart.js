import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

export default function PieChart() {
    const canvasRef = useRef(null);
    const [legendItems, setLegendItems] = useState([]);

    useEffect(() => {
        const labels = ["Not At Risk", "At Risk"];
        const values = [138, 183];
        const colors = ["#617d8c", "#891a10"]; // navy + red

        const total = values.reduce((a, b) => a + b, 0);

        const ctx = canvasRef.current.getContext("2d");

        const pieChart = new Chart(ctx, {
            type: "pie",   // <-- PURE PIE CHART
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
                plugins: {
                    legend: { display: false }, // hide default legend
                },
            },
        });

        // Build custom legend structure
        const items = labels.map((label, i) => {
            const value = values[i];
            const percent = ((value / total) * 100).toFixed(0);
            return {
                label,
                value,
                percent,
                color: colors[i],
            };
        });

        setLegendItems(items);

        return () => pieChart.destroy();
    }, []);

    return (
        <div className="mx-auto">

            {/* PIE CHART */}
            <div className="w-[200px] h-[200px] mx-auto">
                <canvas ref={canvasRef}></canvas>
            </div>

            {/* CUSTOM LEGEND (Screenshot Style) */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">

                {legendItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">

                        {/* VALUE + PERCENT BADGE */}
                        <svg
                            width="110"
                            height="26"
                            viewBox="0 0 110 26"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "block" }}
                        >
                            <rect
                                x="0"
                                y="0"
                                width="110"
                                height="26"
                                rx="8"
                                fill={item.color}
                            />
                            <text
                                x="55"
                                y="18"
                                textAnchor="middle"
                                fill="#ffffff"
                                fontSize="14"
                                fontWeight="600"
                                style={{ fontFamily: "inherit" }}
                            >
                                {item.value} ({item.percent}%)
                            </text>
                        </svg>


                        {/* LABEL */}
                        <div className="mt-1 text-gray-700 text-sm">
                            {item.label}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
