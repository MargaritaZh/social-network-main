import * as React from 'react';
import {SvgIcon} from "../SvgIcon";
import {useState} from "react";

import { Style } from './DropDownMenu.style';
import {dropDownLinksType} from "../../data/types";


export type DropDownMenuProps = {
    menuItems: Array<dropDownLinksType>
}

export const DropDownMenu = ({menuItems}: DropDownMenuProps) => {

    const [open, isOpen] = useState(false)

    const onClickHandler = () => {
        isOpen(prev => !prev)

    }

    return (
        <Style.DropDownMenu>
            <button onClick={onClickHandler}>
                <SvgIcon iconId={"arrowDown"}/>
            </button>
            {open && <Style.DropMenu>
                {menuItems.map((item, index) => {
                    return (
                        <Style.MenuItem key={index}>
                            <a href={item.href}>{item.title}</a>
                            {/*todo navlink*/}
                        </Style.MenuItem>
                    )
                })}
            </Style.DropMenu>}
        </Style.DropDownMenu>
    );
};