import * as React from 'react';

import logo from "../../assets/logo.svg"
import {Style} from "./Header.style"
import {UserElement} from "../../components/userElement/UserElement";
import {SvgIcon} from "../../components/SvgIcon";
import {dropDownMenuItems} from "../../data/data";
import {DropDownMenu} from "../../components/dropDownMenu/DropDownMenu";
import {v1} from "uuid";


type HeaderProps = {};



export const Header = (props: HeaderProps) => {
    return (
        <Style.Header>
            <img src={logo} alt={"logotype"}/>
            <Style.Navigation>
                <Style.Menu>
                    {/*todo navlink*/}
                    <li><a href={"#"}><SvgIcon iconId={"newspaper"}/></a></li>
                    <li><a href={"#"}><SvgIcon iconId={"message"}/></a></li>
                    <li><a href={"#"}><SvgIcon iconId={"notification"}/></a></li>
                </Style.Menu>
                <Style.UserMenu>
                    <UserElement id={v1()} name={"Настя Барашкова"} smallText={"@id234567890"} isOnline/>
                    <DropDownMenu menuItems={dropDownMenuItems}/>
                </Style.UserMenu>
            </Style.Navigation>
        </Style.Header>
    );
};

