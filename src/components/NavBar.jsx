import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-light'>
            <Link className="navbar-brand text-primary" to="/">
            Color Flipper
            </Link>
            <div className="collapse navbar-collapse">
                <div className='navbar-nav'>
                    <NavLink className="nav-item nav-link text-primary" to="/simple">
                        Simple
                    </NavLink>
                    <NavLink className="nav-item nav-link text-primary" to="/hex">
                        Hex
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;