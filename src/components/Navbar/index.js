import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

export const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavLink to='/'>Piece of Cake</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>
        </>
    );
};

export default Navbar;