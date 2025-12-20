import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import CountBadge from "../components/CountBadge";

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

        const labels = ["At Risk", "Not At Risk"];
        const values = [risk, safe];
        const colors = ["#891a10", "#617d8c"];

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
            <div className="w-[150px] h-[150px] mx-auto">
                <canvas ref={canvasRef} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                {legendItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                     

                        <CountBadge
                            bgColor={item.color}
                            width={70} 
                            value={`${item.value} (${item.percent}%)`}
                        />

                        <div className="mt-1 text-gray-700 text-sm">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
