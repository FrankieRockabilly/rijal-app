import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import AdminDashboard from "../pages/admin/AdminDashboardLayout";
import AdminLayananKhitan from "../pages/admin/AdminLayananKhitan";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <HomePage />,
         },
         {
            path: "/about",
            element: <AboutPage />,
         },
         {
            path: "/gallery",
            element: <GalleryPage />,
         },
         {
            path: "/contact",
            element: <ContactPage />,
         },
      ],
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
   {
      path: "/adminDashboard",
      element: <AdminDashboard />,
      children: [
         {
            path: "khitan",
            element: <AdminLayananKhitan />,
         },
      ],
   },
]);

export default router