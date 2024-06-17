import * as React from 'react';
import {SvgIcon} from "../SvgIcon";
import {useState} from "react";
import {dropDownLinkType} from "../../data/types";


export type DropDownMenuProps = {
    menuItems: Array<dropDownLinkType>
}

export const DropDownMenu = ({menuItems}: DropDownMenuProps) => {

    const [open, isOpen] = useState(false)

    const onClickHandler = () => {
        isOpen(prev => !prev)

    }

    return (
        <>
            <button onClick={onClickHandler}>
                <SvgIcon iconId={"arrowDown"}/>
            </button>
            {open && <ul>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href}>{item.title}</a> //todo navlink
                        </li>
                    )
                })}
            </ul>}
        </>
    );
};