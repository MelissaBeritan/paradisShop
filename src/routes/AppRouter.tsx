import { Route, Routes } from "react-router-dom";
import { CartPage, HomePage, ProfilePage } from "../pages";

export default function AppRouter() {
  return (
    <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/profile" element={<ProfilePage/> } />
          <Route path="/cart" element={ <CartPage/>} />
    </Routes>
  )
}
