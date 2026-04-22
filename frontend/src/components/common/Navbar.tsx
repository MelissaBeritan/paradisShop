import { Link, NavLink } from 'react-router-dom';
import '../styles/stylesRouter.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                ParadiShop
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/cart"
                    >
                        🛒
                    </NavLink>
                                        <NavLink 
                        className="nav-item nav-link" 
                        to="/profile/"
                    >
                        👤
                    </NavLink>

                </ul>
            </div>
        </nav>
    )
}
