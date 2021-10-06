import React from "react";

type TProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    fontColor?: "primary" | "secondary" | "tertiary";
};

const fontSize = [
    null,
    "text-3xl font-bold",
    "text-2xl font-bold",
    "text-xl font-semibold",
    "text-lg font-semibold",
    "text-base font-medium",
    "text-sm font-medium",
];

const Heading: React.FC<TProps> = ({ level, fontColor, children }) => {
    const Head: any = `h${level}`;
    return (
        <Head className={`${fontSize[level]} ${fontColor ? fontColor : ""}`}>
            {children}
        </Head>
    );
};

export default Heading;
