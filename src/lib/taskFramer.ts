import { useEffect, useState } from "react";
import TTask from "@interfaces/Task";

const height = 70;
const padding = 10;
const size = 150;

function getHeight(items: TTask[]) {
    const totalHeight = items.length * height;
    const totalPadding = (items.length - 1) * padding;
    const totalScroll = totalHeight + totalPadding;
    return totalScroll;
}

function useConstraints(items: TTask[]) {
    const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

    useEffect(() => {
        setConstraints({ top: size - getHeight(items), bottom: 0 });
    }, [items]);

    return constraints;
}

export { getHeight, useConstraints };
