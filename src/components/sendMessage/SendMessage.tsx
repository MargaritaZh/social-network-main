import {ButtonWithIcon} from "../buttonWithIcon/ButtonWithIcon";

import { Style } from "./SendMessage.style";
import {TextInput} from "../textInput/TextInput";


type SendMessageProps = {
    placeholder: string
    buttonTitle: string
    iconId?: string
    sendMessage: () => void
};
export const SendMessage = ({placeholder, buttonTitle, iconId, sendMessage}: SendMessageProps) => {
    return (
        <Style.SendMessage>
            <TextInput placeholder={placeholder}/>
            <ButtonWithIcon title={buttonTitle} iconId={iconId} onClick={sendMessage}/>
        </Style.SendMessage>
    );
};