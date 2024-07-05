
import './App.css';
import {Header} from "./layout/header/Header";

import {StyleLayout} from "./layout/layoutStyles"
import {Outlet} from "react-router-dom";



function App() {

    return (
        <div className={"container"}>
            <Header/>
            <StyleLayout.Main>
                <Outlet/>
                {/*<SideDialogs persons={personsForDialogs}/>*/}
                {/*<Dialog/>*/}
                {/*<SideNews/>*/}
                {/*<Newsline/>*/}
            </StyleLayout.Main>
        </div>
    );
}

export default App;
