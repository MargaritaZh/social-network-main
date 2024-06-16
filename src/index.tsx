import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from "./components/styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>, document.getElementById('root'));


//
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
//
//
// ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );


