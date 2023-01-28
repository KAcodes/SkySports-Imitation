import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const BlogItem = (props) => {

    return (
        <>
             <div className='card'>
                <img className="card-img-top fluid" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Kayode Apena</h5>
                    <p className="card-text">Front-End Web Developer</p>
                    <a href="https://www.linkedin.com/in/kayode-apena-bb7479173/" target='_blank'  >My LinkedIn</a>
                    <a href="https://github.com/KAcodes" target='_blank' >My Github</a>
                </div>
            </div>
        </>
    )

}

export default BlogItem