
import * as React from 'react';

import logo from "../../assets/logo.svg"
import {style} from "./Header.style"


type HeaderProps = {
    
};
export const Header = (props: HeaderProps) => {
    return (
        <style.Header>
            <img src={logo} alt={"logotype"}/>
            <nav>
                <ul>
                    <li><a href={"#"}>img</a></li>
                    <li><a href={"#"}>img</a></li>
                    <li><a href={"#"}>img</a></li>
                </ul>
                <div>


                </div>
            </nav>
        </style.Header>
    );
};

