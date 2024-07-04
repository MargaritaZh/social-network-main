import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {GlobalStyles} from "./components/styles/GlobalStyles";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes.tsx";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <RouterProvider router={ router}/>
        {/*<App/>*/}
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


