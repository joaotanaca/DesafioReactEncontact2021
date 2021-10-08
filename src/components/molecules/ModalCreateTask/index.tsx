import React, { useCallback } from "react";
import { IoIosClose } from "react-icons/io";
import { v4 as uuid } from "uuid";
import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input";
import { useTaskFramer } from "src/context/taskFramer";

type TProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalCreateTask: React.FC<TProps> = ({ setOpen }) => {
    const { onAdd } = useTaskFramer();
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
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            onKeyPress={handleCtrlEnterTextarea}
        >
            <IoIosClose
                className="cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
                size={36}
            />
            <Input title="Titulo: " id="title" />
            <Input title="Descrição: " id="description" textarea />
            <Button colorTheme="secondary" className="py-3">
                Adicionar tarefa
            </Button>
        </form>
    );
};

export default ModalCreateTask;
