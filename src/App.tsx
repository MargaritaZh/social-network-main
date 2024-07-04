import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {SideDialogs} from "./layout/dialogs/sideDialogs/SideDialogs";
import {personsForDialogs} from "./data/data";
import {Dialog} from "./layout/dialogs/dialog/Dialog";
import {StyleLayout} from "./layout/layoutStyles"
import {Newsline} from "./layout/news/newsline/Newsline";
import {SideNews} from "./layout/news/sideNews/SideNews";

function App() {

    return (
        <div className={"container"}>
            <Header/>
            <StyleLayout.Main>
                {/*<SideDialogs persons={personsForDialogs}/>*/}
                {/*<Dialog/>*/}
                <SideNews/>
                <Newsline/>
            </StyleLayout.Main>
        </div>
    );
}

export default App;
