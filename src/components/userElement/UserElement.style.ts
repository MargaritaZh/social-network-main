import styled from "styled-components";
import {flexWrapper, font} from "../styles/common";
import {theme} from "../styles/Theme";

const UserBlock=styled.div``

const Avatar=styled.img`
    width: 54px;
    height: 54px;
    border-radius: 4px;
    object-fit: cover;
`

const TextInfo=styled.p`
    ${flexWrapper({})}
`

const Name=styled.span`
${font({Fmin:theme.fontSize.main, Fmax:theme.fontSize.main, weight:600})}
`

const Small=styled.span`
    ${font({Fmin:theme.fontSize.small, Fmax:theme.fontSize.main, weight:200})}
`








export const style={
    UserBlock,
    Avatar,
    TextInfo,
    Name,
    Small,
}


