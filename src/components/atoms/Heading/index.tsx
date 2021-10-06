import React from "react";

type TProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    fontColor?: "primary" | "secondary" | "tertiary";
    fontWeight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold";
    className?: string;
};

const fontSize = [
    null,
    "text-3xl",
    "text-2xl",
    "text-xl",
    "text-lg",
    "text-base",
    "text-sm",
];

const Heading: React.FC<TProps> = ({
    className = "",
    children,
    fontColor,
    fontWeight = "bold",
    level,
}) => {
    const Head: any = `h${level}`;
    return (
        <Head
            className={`${fontSize[level]} ${
                fontColor ? fontColor : ""
            } font-${fontWeight} ${className}`}
        >
            {children}
        </Head>
    );
};

export default Heading;
