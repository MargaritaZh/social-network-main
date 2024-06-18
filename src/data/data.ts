import {dropDownLinkType, PersonsDialogType} from "./types";
import {v1} from "uuid";

export const dropDownMenuItems: Array<dropDownLinkType> = [
    {
        href: "#1",
        title: "Menu item 1",
    },
    {
        href: "#2",
        title: "Menu item 2",
    },
    {
        href: "#3",
        title: "Menu item 3",
    },
    {
        href: "#4",
        title: "Menu item 4",
    },
    {
        href: "#5",
        title: "Menu item 5",
    },
]

export const personsForDialogs: Array<PersonsDialogType> = [
    {
        id: v1(),
        name: "Феня Рогожин",
        smallText: "Поминутно жалуются, что у нас нет людей практических; что  политических людей.",
        isOnline: true,
    },
    {
        id: v1(),
        name: "Аглая Епанчина",
        smallText: "Поминутно жалуются, что у нас нет людей практических; что  политических людей.",
        isOnline: false,
    },
    {
        id: v1(),
        name: "Ганя Иволгин",
        smallText: "Поминутно жалуются, что у нас нет людей практических; что  политических людей.",
        isOnline: true,
    },
    {
        id: v1(),
        name: "Лев Мышкин",
        smallText: "Поминутно жалуются, что у нас нет людей практических; что  политических людей.",
        isOnline: false,
    },



]