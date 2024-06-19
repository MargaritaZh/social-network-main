import styled from "styled-components";
import {theme} from "../components/styles/Theme";


const Main = styled.main`
    display: grid;
    grid-template-columns: minmax(min-content, 300px) 1fr;
    gap: 20px;

`

const SideBlock = styled.div`
    padding: 20px;
    background-color: ${theme.colors.bgBlock};
    border-radius: 10px;
`

const MainBlock = styled.div`
    padding: 20px;
    background-color: ${theme.colors.bgBlock};
    border-radius: 10px;
`


export const StyleLayout = {
    Main,
    SideBlock,
    MainBlock,
}