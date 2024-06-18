import avatar from "./../../assets/avatars/Tiana-photo.webp"
import {Style} from "./UserElement.style";
import {NotificationDot} from "../NotificationDot";

type UserElementProps = {
    avatar?: string
    name: string
    smallText: string
    isOnline?: boolean
}

// todo avatar

export const UserElement = ({name, smallText, isOnline}: UserElementProps) => {
    return (
        <Style.UserBlock>
            <Style.AvatarWrapper>
                <Style.Avatar src={avatar} alt={'User\'s-photo'}/>
                {isOnline && <NotificationDot/>}
            </Style.AvatarWrapper>
            <Style.TextInfo>
                <Style.Name>{name}</Style.Name>
                <Style.Small>{smallText}</Style.Small>
            </Style.TextInfo>
        </Style.UserBlock>
    );
};


