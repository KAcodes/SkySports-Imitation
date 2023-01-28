import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavLink } from "react-bootstrap";



const Navigationbar = () => {
    return (

        <Row>
            <Col >
                <Navbar collapseOnSelect expand="sm" bg="light" className='myNav'>
                    <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <NavLink eventKey="1">Home</NavLink>
                            <NavLink eventKey="2">Sports</NavLink>
                            <NavLink eventKey="3">Scores</NavLink>
                            <NavLink eventKey="4">Video</NavLink>
                            <NavLink eventKey="5">TV</NavLink>
                            <NavLink eventKey="6">Sky Bet</NavLink>
                            <NavLink eventKey="7">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>

    );
}

export default Navigationbar;


