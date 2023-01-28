import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavLink } from "react-bootstrap";



const SecondHeader = () => {
    return (

        <Row>
            <Col>
                
                <Col>
                    <h2>Football</h2>
                </Col>

                <Col>
                <Navbar collapseOnSelect expand="md"  className='mySecondNav'>
                    <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                               <NavLink eventKey="1">News</NavLink>
                                <NavLink eventKey="2">Teams</NavLink>
                                <NavLink eventKey="3">Tables</NavLink>
                                <NavLink eventKey="4">Leagues/Cups</NavLink>
                                <NavLink eventKey="5">Fixtures</NavLink>
                                <NavLink eventKey="6">Results</NavLink>
                                <NavLink eventKey="7">Transfers</NavLink>
                                <NavLink eventKey="8">Video</NavLink>
                                <NavLink eventKey="9">On Sky</NavLink>
                                <NavLink eventKey="10">Sky Bet</NavLink>   
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Col>

            </Col>
        </Row>

    );
}

export default SecondHeader;
