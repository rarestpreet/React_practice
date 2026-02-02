import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Layout'
import About from '../src/components/About/About'
import Home from '../src/components/Home/Home'
import Github, { githubInfoLoader } from '../src/components/Github/Github'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                loader:githubInfoLoader,
                path:"github",
                element:<Github/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
