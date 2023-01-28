import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function Header() {

    return ( 
        <>
            <Row>
                <Col className='headerLeft' xs={3} sm={2} md={2}>
                <h1>sky</h1>
                </Col>
                <Col className='headerRight' xs={9} sm={10} md={10}>
                <h1>sports</h1>
                </Col>
            </Row>
        </>
    )
    

}

export default Header