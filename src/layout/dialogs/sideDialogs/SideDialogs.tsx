import {PersonsDialogType} from "../../../data/types";
import {UserElement} from "../../../components/userElement/UserElement";
import {StyleLayout} from '../../layoutStyles';
import {Link, Outlet} from "react-router-dom";

type SideDialogsProps = {
    persons: Array<PersonsDialogType>
};

export const SideDialogs = ({persons}: SideDialogsProps) => {
    return (
        <>

            <StyleLayout.SideBlock>
                <h2>Диалоги</h2>
                <ul>
                    {persons.map(person => {
                        return (
                            <Link to={'currentdialog'}>
                                <li key={person.id}>
                                    <UserElement name={person.name} id={person.id} smallText={person.smallText}
                                                 isOnline={person.isOnline}/>
                                </li>
                            </Link>

                        )
                    })}
                </ul>
            </StyleLayout.SideBlock>
            <Outlet/>


        </>
    )
        ;
};