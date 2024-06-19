import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {SideDialogs} from "./layout/dialogs/sideDialogs/SideDialogs";
import {personsForDialogs} from "./data/data";
import {Dialog} from "./layout/dialogs/dialog/Dialog";
import {StyleLayout} from "./layout/layoutStyles"

function App() {


    return (
        <div className={"container"}>
            <Header/>
            <StyleLayout.Main>
                <SideDialogs persons={personsForDialogs}/>
                <Dialog/>
            </StyleLayout.Main>
        </div>
    );
}

export default App;
