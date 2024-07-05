import { createBrowserRouter } from "react-router-dom";
import {PATH} from "./PATHS.ts";
import App from "../App.tsx";


export const router = createBrowserRouter([
    {
        path:PATH.ROOT,
        element:<App/>,
        errorElement:<div>Error, 404</div>,
        children:[
            {
              path:PATH.DIALOGS,
                element:<p>Content</p>,
            },
        ],

    }
]);
