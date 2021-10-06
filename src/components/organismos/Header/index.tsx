import React from "react";
import Heading from "src/components/atoms/Heading";
import ProgressTask from "src/components/molecules/ProgressTask";

const Header: React.FC = () => {
    return (
        <div>
            <Heading level={1}>Lista de afazeres</Heading>
            <ProgressTask />
        </div>
    );
};

export default Header;
