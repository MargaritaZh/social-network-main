import avatar from "./../../assets/avatars/photo-image.webp"

export const UserElement = () => {
    return (
        <div>
            <img src={avatar} alt={'User\'s-photo'}/>
            <p>
                <span>Настя Барашкова</span>
                <span>@id33323232</span>
            </p>
        </div>
    );
};