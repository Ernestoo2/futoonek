import "./index.css";
import  Contact  from "./pages/Contact.tsx";
import  Gallery  from "./pages/Gallary.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import AdminDashboard from "./Admin/AdminDashboard.tsx";
import AdminLogin from "./Admin/AdminLogin.tsx";
import Campaigns  from "./pages/Campaigns.tsx";
import EnhancedGallery from "./pages/enhancedGallery.tsx";
import GalleryUi from "./pages/Ui/GalleryUi.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Register/Login.tsx";
import React from "react";
import SignUp from "./pages/Register/SignUp.tsx";
import User1 from "./pages/UserPages/User1.tsx";
import UserRegister from "./pages/Register/UserRegister.tsx";
import UserUi from "./pages/UserPages/UserUi.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VolunteerUi } from "./pages/UserPages/VolunteerUI.tsx";

export default function Component() {
  return (
    <Router>
      <Routes>


     {/* Route for the About Us page */}
      <Route path="/" element={<Home/>} />
      <Route path="User" element={<UserUi/>} />
      <Route path="User1" element={<User1/>} />

      <Route path="Login" element={<Login/>} />

      <Route path="SignUp" element={<SignUp/>} />
      <Route path="Gallery" element={<GalleryUi/>} />

      <Route path="Volunteer" element={<VolunteerUi/>} />
      <Route path="Login/userRegister" element={<UserRegister/>} />
      <Route path="Campaigns" element={<Campaigns/>} />
      <Route path="Contact" element={<Contact/>} />

      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="AdminDashboard" element={<AdminDashboard />} />
      <Route path="AdminLogin" element={<AdminLogin />} />
      </Routes>
    </Router>

  )
}
