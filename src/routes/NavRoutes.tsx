import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/common/Navbar'
import { CartPage, HomePage } from '../pages'

export default function NavRoutes() {
  return (
      <>
          <Navbar/>
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/cart" element={ <CartPage/>} />
            </Routes>
      </>
  )
}
