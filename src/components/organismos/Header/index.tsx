import React from "react";
import { IoIosAdd } from "react-icons/io";
import Button from "@atoms/Button";
import Heading from "@atoms/Heading";
import ProgressTask from "@molecules/ProgressTask";

const Header: React.FC = () => {
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
            <div className="order-2 sm:order-3 flex justify-end sm:justify-center">
                <Button>
                    <IoIosAdd size={24} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
