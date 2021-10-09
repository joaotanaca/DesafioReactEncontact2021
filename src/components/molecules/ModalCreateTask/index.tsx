import React, { useCallback } from "react";
import { v4 as uuid } from "uuid";
import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input";
import { useTaskFramer } from "src/context/taskFramer";
import { useIntl } from "react-intl";

type TProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalCreateTask: React.FC<TProps> = ({ setOpen }) => {
    const { onAdd } = useTaskFramer();
    const { formatMessage } = useIntl();

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const elements: any = event.currentTarget.elements;
            const data: any = {};

            Object.keys(elements).forEach((key, index, array) => {
                if (index === array.length - 1) return;
                const { name, value } = elements[key];
                data[name] = value;
            });

            data.id = uuid();
            data.isDone = false;

            onAdd(data);
            setOpen(false);
        },
        [onAdd, setOpen],
    );

    const handleCtrlEnterTextarea = useCallback(
        (event: React.KeyboardEvent<HTMLFormElement>) => {
            if (
                event.ctrlKey &&
                event.key === "Enter" &&
                (event.target as HTMLTextAreaElement).tagName === "TEXTAREA"
            ) {
                handleSubmit(event);
            }
        },
        [handleSubmit],
    );
    return (
        <form
            className=" flex flex-col gap-4"
            onSubmit={handleSubmit}
            onKeyPress={handleCtrlEnterTextarea}
        >
            <Input
                title={formatMessage({ id: "modalCreateTaskTitleInput" })}
                id="title"
            />
            <Input
                title={formatMessage({ id: "modalCreateTaskDescriptionInput" })}
                id="description"
                textarea
            />
            <Button colorTheme="secondary" className="py-3">
                {formatMessage({ id: "modalCreateTaskSubmit" })}
            </Button>
        </form>
    );
};

export default ModalCreateTask;
