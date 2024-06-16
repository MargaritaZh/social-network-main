import avatar from "./../../assets/avatars/Tiana-photo.webp"
import { style } from "./UserElement.style";

export const UserElement = () => {
    return (
        <style.UserBlock>
            <style.Avatar src={avatar} alt={'User\'s-photo'}/>
            <style.TextInfo>
                <style.Name>Настя Барашкова</style.Name>
                <style.Small>@id33323232</style.Small>
            </style.TextInfo>
        </style.UserBlock>
    );
};


