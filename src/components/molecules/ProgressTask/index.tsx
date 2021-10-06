import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Heading from "src/components/atoms/Heading";
import Text from "src/components/atoms/Text";
import styled, { useTheme } from "styled-components";

const ContainerProgressTask = styled.div.attrs({ className: "flex gap-4" })``;

const ProgressTask: React.FC = () => {
    const { secondary } = useTheme();
    return (
        <ContainerProgressTask>
            <div style={{ width: 80, height: 80 }}>
                <CircularProgressbar
                    value={73}
                    text={`${73}%`}
                    counterClockwise
                    styles={buildStyles({ pathColor: "red",  })}
                />
            </div>
            <div>
                <Heading level={5}>Progresso das tarefas</Heading>
                <Text fontWeight={300}>
                    <span
                        style={{ color: secondary.accentColor }}
                        className="font-semibold"
                    >
                        14/22{" "}
                    </span>
                    tarefas prontas
                </Text>
            </div>
            <div></div>
        </ContainerProgressTask>
    );
};

export default ProgressTask;
