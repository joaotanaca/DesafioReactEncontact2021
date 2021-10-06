import React from "react";
import styled from "styled-components";

const Template = styled.div.attrs({
    className: "flex flex-col items-center container px-3",
})``;

const TemplateComponent: React.FC = ({ children }) => {
    return <Template>{children}</Template>;
};

export default TemplateComponent;
