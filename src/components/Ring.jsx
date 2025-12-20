import { useEffect, useRef } from "react";
import {
    Chart,
    DoughnutController,
    ArcElement
} from "chart.js";

Chart.register(DoughnutController, ArcElement);

export default function Ring({
    percent = 0,
    count = 0,
    color = "#000"
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const chart = new Chart(canvasRef.current, {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        data: [percent, 100 - percent],
                        backgroundColor: [color, "#E5E7EB"],
                        borderWidth: 0,
                        cutout: "72%"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        });

        return () => chart.destroy();
    }, [percent, color]);

    return (
        <div className="relative w-[120px] h-[120px]">
            <canvas ref={canvasRef} />

            {/* CENTER TEXT */}
            <div className="absolute inset-x-0 top-[25%] flex flex-col items-center justify-center leading-tight">
                <div className="text-sm font-semibold" style={{color: color}}>
                    {percent}%
                </div>
                <div className="text-sm font-semibold" style={{color: color}}>
                    {count}
                </div>
            </div>
        </div>
    );
}
