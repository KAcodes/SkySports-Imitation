import Header from './components/Header';
import './App.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Navigationbar from './components/Navbar';
import SecondHeader from './components/SecondHeader'
import BlogItem from './components/BlogItem';
import profPic from "./imagesAndFonts/intropic.jpg";
import premTable from './imagesAndFonts/premTable.jpg';

function App() {
  return (
    <Container fluid>
            <Row>
                <Col className='headerMargins' md={1}></Col>
                <Col md={10}>
                  <Header/>
                  <Navigationbar/>
                  <SecondHeader/>
                  <Row>
                    <Col sm={8}>
                        <Col>
                          <BlogItem img={profPic}/>
                        </Col>
                        <Row>
                          <Col sm={6}>
                            <BlogItem img={profPic}/>
                          </Col>
                          <Col sm={6}>
                            <BlogItem img={profPic}/>
                          </Col>
                        </Row>
                    </Col>

                    <Col sm={4}>
                      <Image fluid id='prem' src={premTable}/>
                    </Col> 
                  </Row>
                  <Col></Col>
                  
                </Col>
                <Col className='headerMargins' md={1}></Col>
            </Row>
      </Container>
  );
}

export default App;
