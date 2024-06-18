import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {SideDialogs} from "./layout/dialogs/sideDialogs/SideDialogs";
import {personsForDialogs} from "./data/data";


function App() {


    return (
        <div className={"container"}>
            <Header/>
            <main>
                <SideDialogs persons={personsForDialogs}/>
            </main>


        </div>
    );
}

export default App;
