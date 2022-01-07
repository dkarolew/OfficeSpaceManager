import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {UserContext} from "../utils/UserContext";

const NavBar = () => {

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Office Space Manager</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {userInfo.role === 'USER' && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
                        {userInfo.role === 'ADMIN' && <Nav.Link href="/admin-panel">Admin panel</Nav.Link>}
                        {userInfo.role === 'USER' && <Nav.Link href="/contact">Contact</Nav.Link>}
                        <Nav.Link href="/login">Log out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


