import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import { NavLink as AppLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <div>
            <Navbar className="nv-bg" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <AppLink className="text-deco" activeStyle={activeStyle} to="/home">Home</AppLink>
                            <AppLink className="text-deco" activeStyle={activeStyle} to="/resturant">Resturant</AppLink>
                            <AppLink className="text-deco" activeStyle={activeStyle} to="/about">About</AppLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;