import React from "react";
import styled from "styled-components";

const Template = styled.div.attrs({
    className: "flex justify-center container",
})``;

const TemplateComponent: React.FC = ({ children }) => {
    return <Template>{children}</Template>;
};

export default TemplateComponent;
