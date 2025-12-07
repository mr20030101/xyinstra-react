import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function DualBarChart() {
    const canvasRef = useRef(null);

    useEffect(() => {
        Chart.register(ChartDataLabels);

        const ctx = canvasRef.current.getContext("2d");

        const labels = [
            "OPEN & HONEST\nCOMMUNICATION",
            "FEEDBACK",
            "AUTONOMY",
            "RESPECTFUL",
            "DEPENDABILITY",
        ];

        const fulfilled = [216, 212, 192, 146, 141];
        const unfulfilled = [101, 103, 88, 53, 45];

        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Fulfilled",
                        data: fulfilled,
                        backgroundColor: "#6A8599",
                        borderRadius: 5,
                        barThickness: 18,
                        datalabels: {
                            color: "white",
                            anchor: "center",
                            align: "center",
                        },
                    },
                    {
                        label: "Unfulfilled",
                        data: unfulfilled,
                        backgroundColor: "#8B1C1C",
                        borderRadius: 5,
                        barThickness: 18,
                        datalabels: {
                            color: "white",
                            anchor: "center",
                            align: "center",
                        },
                    },
                ],
            },
            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { grid: { display: false } },
                    y: {
                        ticks: {
                            callback: function (value) {
                                return this.getLabelForValue(value).replace("\n", " ");
                            },
                        },
                        grid: { display: false },
                    },
                },
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            usePointStyle: true,
                            pointStyle: "rect",
                            padding: 20,
                        },
                    },
                    datalabels: {
                        formatter: (value) => value,
                        color: "white",
                        font: {
                            size: 12,
                            weight: "bold",
                        },
                    },
                },
            },
        });

        return () => chart.destroy();
    }, []);

    return (
        <div className="w-full h-[420px]">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
