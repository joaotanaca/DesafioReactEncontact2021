import styled from "styled-components";
import Text from "../Text";

type TProps = React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
    title: string;
    id: string;
    textarea?: boolean;
};

const InputStyled = styled.label`
    input,
    textarea {
        border: 1px solid ${({ theme }) => theme.fontColor};
        &:focus {
            border-color: ${({ theme }) => theme.secondary.accentColor};
            outline: ${({ theme }) => theme.secondary.accentColor};
        }
    }
    textarea {
        height: 200px;
        resize: none;
    }
`;

const Input: React.FC<TProps> = ({
    title,
    id,
    textarea = false,
    className,
    ...props
}) => (
    <InputStyled className="flex flex-col" htmlFor={id}>
        <Text fontSize="20px">{title}</Text>
        {textarea ? (
            <textarea
                className={`rounded-md p-1 pl-2 mt-2 ${className}`}
                id={id}
                name={id}
                {...props}
            />
        ) : (
            <input
                className={`rounded-md p-4 pl-2 mt-2 ${className}`}
                id={id}
                name={id}
                {...props}
            />
        )}
    </InputStyled>
);

export default Input;
