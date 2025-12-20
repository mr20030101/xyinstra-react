import { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default function DisengagementDoughnut() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: [
          "Actively Disengaged",
          "Disengaged",
          "Partially Disengaged"
        ],
        datasets: [
          {
            data: [38, 38, 25],
            backgroundColor: [
              "#9B1C1C", // red
              "#C05621", // orange
              "#2563EB"  // blue
            ],
            borderWidth: 0,
            cutout: "70%"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.raw}%`
            }
          }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="w-[240px] h-[240px] mx-auto">
      <canvas ref={canvasRef} />
    </div>
  );
}
