import { Style } from "./TextInput.style"

type TextInputProps = {
    placeholder: string
};
export const TextInput = ({placeholder}: TextInputProps) => {
    return <Style.Input type={"text"} placeholder={placeholder}/>
};