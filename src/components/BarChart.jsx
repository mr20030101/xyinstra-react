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

// Register STATIC chart components once
Chart.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function BarChart({
    labels = [],
    fulfilled = [],
    unfulfilled = [],
    testTaken = 0
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!labels.length || !testTaken) return;

        const ctx = canvasRef.current.getContext("2d");

        /* ===============================
           LEGACY PERCENTAGE LOGIC
        =============================== */
        const percentages = fulfilled.map((f, i) => {
            const u = unfulfilled[i] ?? 0;

            return {
                // Blue bar
                fulfilled: Math.round((f / testTaken) * 100),

                // Red bar
                unfulfilled: f > 0 ? Math.round((u / f) * 100) : 0
            };
        });

        /* ===============================
           LOCAL PLUGINS (IMPORTANT)
        =============================== */
        const barLabelsPlugin = {
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
            }
        };

        const categoryAboveBarPlugin = {
            id: "categoryAboveBar",
            afterDraw(chart) {
                const { ctx, chartArea } = chart;

                ctx.save();
                ctx.font = "bold 14px Arial";
                ctx.fillStyle = "#000";
                ctx.textAlign = "left";
                ctx.textBaseline = "bottom";

                chart.data.labels.forEach((label, index) => {
                    const bar = chart.getDatasetMeta(0).data[index];
                    if (!bar) return;

                    const SPACING = 6;
                    const x = chartArea.left;
                    const y = bar.y - bar.height / 2 - SPACING;

                    ctx.fillText(label, x, y);
                });

                ctx.restore();
            }
        };

        /* ===============================
           CHART INSTANCE
        =============================== */
        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Selected Criteria",
                        data: fulfilled,
                        backgroundColor: "#6A8599",
                        barThickness: 44
                    },
                    {
                        label: "Unfulfilled",
                        data: unfulfilled,
                        backgroundColor: "#8B1C1C",
                        barThickness: 44
                    }
                ]
            },
            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { grid: { display: false } },
                    y: {
                        grid: { display: false },
                        ticks: { display: false }
                    }
                },
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            usePointStyle: true,
                            pointStyle: "circle",
                            padding: 20
                        }
                    },
                    tooltip: { enabled: true }
                }
            },
            plugins: [barLabelsPlugin, categoryAboveBarPlugin]
        });

        return () => chart.destroy();
    }, [labels, fulfilled, unfulfilled, testTaken]);

    return (
        <div className="w-full h-[720px] max-w-[1440px] mx-auto">
            <canvas ref={canvasRef} />
        </div>
    );
}
