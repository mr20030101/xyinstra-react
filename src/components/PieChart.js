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
                        <div
                            className="px-3 py-1 rounded-lg text-white font-semibold text-sm"
                            style={{ backgroundColor: item.color }}
                        >
                            {item.value} ({item.percent}%)
                        </div>

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
