import * as React from 'react';

import logo from "../../assets/logo.svg"
import {style} from "./Header.style"
import {UserElement} from "../../components/userElement/UserElement";
import {SvgIcon} from "../../components/SvgIcon";
import {DropDownMenu} from "../../components/dropDownMenu/DropDownMenu";
import {dropDownMenuItems} from "../../data/data";


type HeaderProps = {};
export const Header = (props: HeaderProps) => {
    return (
        <style.Header>
            <img src={logo} alt={"logotype"}/>
            <nav>
                <ul>
                    //todo navlink
                    <li><a href={"#"}><SvgIcon iconId={"newspaper"}/></a></li>
                    <li><a href={"#"}><SvgIcon iconId={"message"}/></a></li>
                    <li><a href={"#"}><SvgIcon iconId={"notification"}/></a></li>
                </ul>
                <div>
                    <UserElement/>
                    <DropDownMenu menuItems={dropDownMenuItems}/>
                </div>
            </nav>
        </style.Header>
    );
};

