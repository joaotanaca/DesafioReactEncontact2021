import styled from "styled-components";
import Text from "../Text";

type TProps = {
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

const Input: React.FC<TProps> = ({ title, id, textarea = false }) => (
    <InputStyled className="flex flex-col" htmlFor={id}>
        <Text fontSize="20px">{title}</Text>
        {textarea ? (
            <textarea className="rounded-md p-1 pl-2 mt-2" id={id} name={id} />
        ) : (
            <input className="rounded-md p-1 pl-2 mt-2" id={id} name={id} />
        )}
    </InputStyled>
);

export default Input;
