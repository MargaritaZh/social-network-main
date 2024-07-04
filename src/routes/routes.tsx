import { createBrowserRouter } from "react-router-dom";
import {PATH} from "./PATHS.ts";


export const router = createBrowserRouter([
    {
        path:PATH.ROOT,
        element:<div>hello</div>
    }
]);
