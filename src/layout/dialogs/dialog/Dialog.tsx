import * as React from 'react';
import {UserElement} from "../../../components/userElement/UserElement";
import {personsForDialogs} from "../../../data/data";
import {StyleLayout} from '../../layoutStyles';
import {Style} from '../dialogs.style';
import {v1} from "uuid";
import {Message} from "./message/Message";
import avatar from "./../../../assets/avatars/Tiana-photo.webp"
import {SendMessage} from "../../../components/sendMessage/SendMessage";

type messageType = {
    id: string
    authorId: string
    text: string
    isLiked: boolean
    time: string
}

const messages: Array<messageType> = [
    {
        id: v1(),
        authorId: v1(),
        text: "Реферат — краткое точное изложение содержания документа, включающее основные фактические сведения и выводы, без дополнительных толкований или критических замечаний автора реферата.",
        isLiked: false,
        time: Date(),
    },
    {
        id: v1(),
        authorId: v1(),
        text: "Например: Толщина стенки в ячейке пчелиных сотов составляет 0,073 миллиметра с отклонением не более 0,002 миллиметра. Каким измери тельным прибором пчела проверяет толщину стенки во время работы?",
        isLiked: false,
        time: Date(),
    },
    {
        id: v1(),
        authorId: personsForDialogs[0].id,
        text: "При том, что в улье поддерживается температура 35 градусов Цельсия, а состав и свойства воска также постоянны, величина прогиба зависит только от толщины стенки.",
        isLiked: true,
        time: Date(),
    },


]


export const Dialog = () => {

    const user = personsForDialogs[0];

    const myId = personsForDialogs[0].id


    return (
        <StyleLayout.MainBlock>
            <Style.DialogHeader>
                <UserElement id={user.id} name={user.name} smallText={user.smallText}/>
            </Style.DialogHeader>
                {messages.map(message => {

                    const fromMe =
                        myId === message.authorId

                    return (
                        <Message key={message.id}
                                 avatar={avatar}
                                 text={message.text}
                                 date={message.time}
                                 like={message.isLiked}
                                 fromMe={fromMe}
                        />
                    )
                })}
            <SendMessage placeholder={'Введи сообщение'} buttonTitle={"Отправить"} iconId={'message'} sendMessage={() => {}}/>

        </StyleLayout.MainBlock>
    );
};





