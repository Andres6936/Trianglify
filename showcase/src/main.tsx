import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CSSProvider} from '@master/css.react'
import config from "../master.css.ts";
import App from './routes/App.tsx'
import Home from "./routes/Home.tsx";
import DestSVG from "./routes/DestSVG.tsx";
import ColorFunction from "./routes/ColorFunction.tsx";
import CustomPoints from "./routes/CustomPoints.tsx";
import Transparency from "./routes/Transparency.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/line",
        element: <App/>
    },
    {
        path: "/color",
        element: <ColorFunction/>
    },
    {
        path: "/custom",
        element: <CustomPoints/>
    },
    {
        path: "/svg",
        element: <DestSVG/>
    },
    {
        path: "/transparency",
        element: <Transparency/>
    }
], {
    basename: import.meta.env.BASE_URL
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CSSProvider config={config}>
            <RouterProvider router={router}/>
        </CSSProvider>
    </React.StrictMode>,
)
