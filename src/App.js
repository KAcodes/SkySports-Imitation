import Header from './components/Header';
import './App.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Navigationbar from './components/Navbar';
import SecondHeader from './components/SecondHeader'
import BlogItem from './components/BlogItem';

import me_festival from "./imagesAndFonts/me_festival.jpg";
import saka from './imagesAndFonts/saka.jpg';
import messi from './imagesAndFonts/messi.jpg';
import ronaldo from './imagesAndFonts/ronaldo.jpg';
import arsenal from './imagesAndFonts/arsenal.jpg';
import ronaldinho from './imagesAndFonts/ronaldinho.jpg';

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
                          <BlogItem img={saka} main={true} header='Breaking News' content='Bukayo Saka voted best young player in the world'
                          />
                        </Col>
                        <Row>
                          <Col sm={6}>
                            <BlogItem img={arsenal} main={true} header='arsenal back to top' content='Arsenal top the league after brilliant spurs win'/>
                          </Col>
                          <Col sm={6}>
                            <BlogItem img={messi} main={true} header='Argentina wins wc' content='messi takes goat status with wc win'/>
                          </Col>
                        </Row>
                        <Row><Col>
                          <BlogItem img={ronaldo} main={false} header='Ronaldo stoops even lower' content='Forward signs for unknown saudi arabian team after terrible WC EXIT'/></Col>
                        </Row>
                        <Row><Col>
                          <BlogItem img={ronaldinho} main={false} header='the man, the myth, the legend' content='The story of Ronaldinho: the games greatest showman'/></Col>
                        </Row>
                        <Row><Col>
                          <BlogItem img={me_festival} main={false} header='apena to sign for arsenal' content='arteta finally brings in £60 million man after months of negotiating'/></Col>
                        </Row>
                    </Col>

                    <Col className='right-sec' sm={4}>
                      <Image fluid id='prem' src={premTable}/>
                    </Col> 
                  </Row>
                  <Col>
                  <a href="https://www.skysports.com/football" target='_blank' >Click here to see the real Page</a>
                  </Col>
                  
                </Col>
                <Col className='headerMargins' md={1}></Col>
            </Row>
      </Container>
  );
}

export default App;
