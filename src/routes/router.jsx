import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        children :[
            {
                path : '/',
                element : <HomePage />
            },
            {
                path:'/about',
                element : <AboutPage />
            },
            {
                path:'/gallery',
                element : <GalleryPage />
            },
            {
                path:'/contact',
                element : <ContactPage />
            },
        ]
    }
])

export default router