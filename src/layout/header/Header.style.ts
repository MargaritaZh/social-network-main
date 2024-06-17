import styled from "styled-components";
import {flexWrapper} from "../../components/styles/common";
import {theme} from "../../components/styles/Theme";

const Header=styled.header`
    ${flexWrapper({gap:"20px"})};
    background-color: ${theme.colors.bgBlock};
    padding: 30px 20px;
`

const Navigation=styled.nav`
    ${flexWrapper({gap:"20px"})}
`

const Menu=styled.ul`
    ${flexWrapper({gap:"20px"})}
`

const UserMenu=styled.div`
    ${flexWrapper({gap:"20px"})}
`


export const Style={
    Header,
    Navigation,
    Menu,
    UserMenu,

}