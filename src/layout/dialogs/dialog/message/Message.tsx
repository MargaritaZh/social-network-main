import * as React from 'react';
import {SvgIcon} from "../../../../components/SvgIcon";
import { Style } from './Massage.style';

type MessageProps = {
    avatar: string
    text: string
    date: string
    like: boolean
    fromMe: boolean
};

export const Message = ({avatar, text, date, like, fromMe}: MessageProps) => {


    return (
        <Style.Message fromMe={fromMe}>
            <Style.Photo src={avatar} alt={"Photo of profile"}/>
            <Style.TextField fromMe={fromMe}>
                <p>{text}</p>
                <time>{date}</time>
            </Style.TextField>
            {like && <SvgIcon iconId={"likes"}/>}
        </Style.Message>
    );
};


