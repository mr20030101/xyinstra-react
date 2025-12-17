import { useEffect, useRef } from "react";
import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";

// Register chart types
Chart.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function BarChart() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");

        const labels = [
            "OPEN & HONEST COMMUNICATION",
            "FEEDBACK",
            "AUTONOMY",
            "RESPECTFUL",
            "DEPENDABILITY",
        ];

        const fulfilled = [216, 212, 192, 146, 141];
        const unfulfilled = [101, 103, 88, 53, 45];

        // Compute percentages
        const percentages = fulfilled.map((f, i) => {
            const u = unfulfilled[i];
            const total = f + u;
            return {
                fulfilled: Math.round((f / total) * 100),
                unfulfilled: Math.round((u / total) * 100),
            };
        });

        // ✅ Plugin: value + percentage inside bars
        const BarLabelsPlugin = {
            id: "barLabels",
            afterDraw(chart) {
                const { ctx, scales } = chart;
                const xScale = scales?.x;
                if (!xScale) return;

                chart.data.datasets.forEach((dataset, datasetIndex) => {
                    const meta = chart.getDatasetMeta(datasetIndex);

                    meta.data.forEach((bar, index) => {
                        if (!bar) return;

                        const value = dataset.data[index];
                        const percent =
                            datasetIndex === 0
                                ? percentages[index].fulfilled
                                : percentages[index].unfulfilled;

                        const startX = xScale.getPixelForValue(0);
                        const endX = xScale.getPixelForValue(value);
                        const centerX = (startX + endX) / 2;

                        ctx.save();
                        ctx.font = "bold 12px Arial";
                        ctx.fillStyle = "#fff";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";

                        ctx.fillText(`${value} (${percent}%)`, centerX, bar.y);
                        ctx.restore();
                    });
                });
            },
        };

        // ✅ Plugin: category labels ABOVE bars
        const CategoryAboveBarPlugin = {
            id: "categoryAboveBar",
            afterDraw(chart) {
                const { ctx, chartArea } = chart;

                ctx.save();
                ctx.font = "bold 12px Arial";
                ctx.fillStyle = "#666";
                ctx.textAlign = "left";
                ctx.textBaseline = "bottom";

                chart.data.labels.forEach((label, index) => {
                    const bar = chart.getDatasetMeta(0).data[index];
                    if (!bar) return;

                    const SPACING = 6; // ✅ increase this for more gap

                    const x = chartArea.left;
                    const y = bar.y - bar.height / 2 - SPACING;

                    ctx.fillText(label, x, y);
                });

                ctx.restore();
            },
        };


        Chart.register(BarLabelsPlugin, CategoryAboveBarPlugin);

        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Selected Criteria",
                        data: fulfilled,
                        backgroundColor: "#6A8599",
                        barThickness: 44,
                    },
                    {
                        label: "Unfulfilled",
                        data: unfulfilled,
                        backgroundColor: "#8B1C1C",
                        barThickness: 44,
                    },
                ],
            },
            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { display: false },
                    },
                    y: {
                        grid: { display: false },
                        ticks: { display: false }, // ✅ hide left labels
                    },
                },
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            usePointStyle: true,
                            pointStyle: "circle",
                            padding: 20,
                        },
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            },
        });

        return () => chart.destroy();
    }, []);


    return (
        <div className="w-full h-[620px] max-w-[1440px] mx-auto">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
