import styled from "styled-components";
import {flexWrapper, font} from "../styles/common";
import {theme} from "../styles/Theme";
import {NotificationDot} from "../NotificationDot";

const UserBlock=styled.div`
    ${flexWrapper({align: "center", justify: "start", gap: "12px"})};
`

const AvatarWrapper=styled.div`
    position: relative;

    & ${NotificationDot} {
        top: -4px;
        right: -4px;
    }
`

const Avatar=styled.img`
    width: 54px;
    height: 54px;
    border-radius: 4px;
    object-fit: cover;
`

const TextInfo=styled.p`
    ${flexWrapper({direction:"column",align:"start",gap:"4px"})};
`

const Name=styled.span`
${font({Fmin:theme.fontSize.main, Fmax:theme.fontSize.main, weight:600})};
`

const Small=styled.span`
    ${font({Fmin:theme.fontSize.small, Fmax:theme.fontSize.main, weight:200})};
`

export const Style={
    UserBlock,
    AvatarWrapper,
    Avatar,
    TextInfo,
    Name,
    Small,
}


