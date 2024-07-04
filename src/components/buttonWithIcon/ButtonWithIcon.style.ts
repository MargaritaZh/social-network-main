import styled from "styled-components";
import {flexWrapper} from "../styles/common";
import {theme} from "../styles/Theme";


const Button = styled.button `
    ${flexWrapper({gap: '6px'})}
    padding: 4px 10px;
    border-radius: 6px;
    border: 2px solid ${theme.colors.accent};
    
    &:hover {
        background-color: ${theme.colors.accent};
    }
`;

export const Style = {
    Button
}