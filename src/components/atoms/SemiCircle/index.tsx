import React from "react";

type TProps = { bottom?: boolean };

const SemiCircle: React.FC<TProps> = ({ bottom = false }) => {
    const size = 150;
    const strokeWidth = 30;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI * 2;
    const dash = (75 * circumference) / 100;
    return (
        <svg
            width={size}
            height={size}
            className="absolute"
            viewBox={`0 0 ${size} ${size}`}
            style={{
                top: !bottom ? "25%" : "-75%",
                right: "-17%",
            }}
        >
            <circle
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(${bottom ? "90" : "180"} ${size / 2} ${
                    size / 2
                })`}
                strokeDasharray={circumference - dash}
                style={{ transition: "all 0.5s" }}
            />
        </svg>
    );
};

export default SemiCircle;
