import { SvgIcon } from "../SvgIcon";
import { Style } from "./ButtonWithIcon.style";


type ButtonWithIconProps = {
    title: string
    iconId?: string
    onClick: () => void
};
export const ButtonWithIcon = ({title, iconId, onClick}: ButtonWithIconProps) => {
    return (
        <Style.Button onClick={onClick}>
            {title}
            {iconId && <SvgIcon iconId={iconId}/>}
        </Style.Button>
    );
};