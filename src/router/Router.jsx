import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CreateMeme from "../pages/CreateMeme";
import EditMeme from "../pages/EditMeme";
import MemeDetail from "../pages/MemeDetail";
import GalleryWork from "../pages/GalleryWork";
import GalleryStudent from "../pages/GalleryStudent";
import GalleryProgram from "../pages/GalleryProgram";

export const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path:'newmeme',
            element: <CreateMeme />
        },
        {
            path:'editmeme/:id',
            element: <EditMeme />
        },
        {
            path:'detailmeme/:id',
            element: <MemeDetail />
        },
        {
            path:'gallerywork',
            element: <GalleryWork />
        },
        {
            path:'galleryprogram',
            element: <GalleryProgram />
        },
        {
            path:'gallerystudent',
            element: <GalleryStudent />
        }
]
}])

