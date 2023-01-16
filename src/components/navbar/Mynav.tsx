import css from './navbar.module.scss'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Myicon from '../myicons/Myicon';
import { NavLink } from "react-router-dom";

function MyNavbar() {
    return (
        <Navbar className={`${css.mynav} p-2`} expand="lg">
            <NavLink className={`${css.mylogo} m-2 `} to="/">Cars</NavLink>
            <Navbar.Toggle className='m-2' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto m-2  d-flex align-items-center">
                    <NavLink className={`${css.mylink}`} to="/">Home</NavLink>
                    <NavLink className={`${css.mylink2}`} to="/about">about</NavLink>
                    <Myicon />
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default MyNavbar