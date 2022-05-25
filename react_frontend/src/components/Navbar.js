import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg" style={{paddingLeft: '20px'}}>
            <Navbar.Brand to="/">DeanOffice</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-students" to="/">Students</Link>
                    <Link className="nav-addStudent" to="/addStudent">AddStudent</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarMenu;
