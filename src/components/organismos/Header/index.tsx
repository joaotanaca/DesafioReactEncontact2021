import { motion, Variants } from "framer-motion";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Button from "src/components/atoms/Button";
import Heading from "src/components/atoms/Heading";
import ProgressTask from "src/components/molecules/ProgressTask";
import useDarkMode from "src/hooks/useDarkMode";

const Header: React.FC = () => {
    const { toogleMode, mode } = useDarkMode();
    const variants: Variants = { dark: { x: 0 }, light: { x: "-60%" } };
    return (
        <div className="grid grid-cols-4 items-center w-full pt-12 pb-10">
            <Heading
                level={1}
                fontWeight="semibold"
                className="col-span-3 sm:col-span-1 order-2"
            >
                Lista de tarefas
            </Heading>
            <ProgressTask />
            <div className="order-2 sm:order-3 flex justify-evenly">
                <Button
                    onClick={toogleMode}
                    className="relative overflow-hidden"
                    style={{ width: 40 }}
                >
                    <motion.div
                        className="flex justify-between"
                        animate={mode}
                        variants={variants}
                        style={{ width: "250%" }}
                    >
                        <MdDarkMode size={24} />
                        <MdLightMode size={24} />
                    </motion.div>
                </Button>
                <Button>
                    <IoIosAdd size={24} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
