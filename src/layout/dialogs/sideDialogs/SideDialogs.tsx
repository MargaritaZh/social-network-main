import * as React from 'react';
import {PersonsDialogType} from "../../../data/types";
import {UserElement} from "../../../components/userElement/UserElement";
import { StyleLayout } from '../../layoutStyles';

type SideDialogsProps = {
    persons:Array<PersonsDialogType>
};

export const SideDialogs = ({persons}: SideDialogsProps) => {
    return (
        <StyleLayout.SideBlock>
            <h2>Диалоги</h2>
            <ul>
                {persons.map(person=>{
                    return(
                        <li key={person.id}>
                            <UserElement name={person.name} id={person.id} smallText={person.smallText} isOnline={person.isOnline}/>
                        </li>
                    )
                })}
            </ul>
        </StyleLayout.SideBlock>
    );
};