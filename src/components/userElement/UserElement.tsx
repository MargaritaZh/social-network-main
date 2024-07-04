import avatar from "./../../assets/avatars/Tiana-photo.webp"
import {Style} from "./UserElement.style";
import {NotificationDot} from "../NotificationDot";
import {PersonsDialogType} from "../../data/types";


// todo avatar
export const UserElement = ({name, smallText, isOnline}: PersonsDialogType) => {
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


