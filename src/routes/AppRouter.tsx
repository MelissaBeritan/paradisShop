import { Route, Routes } from "react-router-dom";
import {ProfilePage } from "../pages";
import NavRoutes from "./NavRoutes";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/*" element={ <NavRoutes/> }/>
            </Routes>
        </>
  )
}
