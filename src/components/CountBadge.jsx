export default function CountBadge({
    value = 0,
    width = 36,
    height = 26,
    radius = 6,
    bgColor = "#16a34a",
    textColor = "#ffffff",
    fontSize = 13,
    fontWeight = 600
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width={width}
                height={height}
                rx={radius}
                fill={bgColor}
            />
            <text
                x={width / 2}
                y={height / 2 + 5}
                textAnchor="middle"
                fill={textColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
            >
                {value}
            </text>
        </svg>
    );
}
