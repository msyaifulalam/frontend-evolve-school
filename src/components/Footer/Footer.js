import React, { Component } from 'react';
import '../Footer/Footer.css';
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import pict1 from '../../asset/traveloka.svg'; 
import pict2 from '../../asset/24.svg'; 
import pict3 from '../../asset/logo1.svg'; 
import pict4 from '../../asset/logo2.svg'; 
import pict5 from '../../asset/logo3.svg'; 
import android from '../../asset/googleplay.svg';
import apple from '../../asset/appstore.svg';
import twitter from '../../asset/twitter.svg';
import facebook from '../../asset/facebook.svg';
import instagram from '../../asset/instagram.svg';
import googleplus from '../../asset/google+.svg';

class Footer extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <img src={pict1}/>
                    <br/>
                    <div class="img">
                        <img src={pict2}/>
                        <div class="text1">Hubungi Kami
                            <div class="text2">0804-1500-308</div>
                        </div>
                    </div>
                    <br/>
                    <img src={pict3}/> &nbsp;
                    <img src={pict4}/> &nbsp;
                    <img src={pict5}/>
                </Col>
                <Col>
                    <div class="About">Tentang Traveloka</div>
                    {/* <ListGroup>
                        <ListGroupItem active tag="a" href="#" action>Cara Pesan</ListGroupItem>
                        <ListGroupItem active tag="a" href="#" action>Hubungi kami</ListGroupItem>
                        <ListGroupItem active tag="a" href="#" action>Cara Pesan</ListGroupItem>
                        <ListGroupItem active tag="a" href="#" action>Cara Pesan</ListGroupItem>
                        <ListGroupItem active tag="a" href="#" action>Cara Pesan</ListGroupItem>
                        <ListGroupItem active tag="a" href="#" action>Cara Pesan</ListGroupItem>
                    </ListGroup> */}
                    <div class="list">
                        <ul>
                            <li><a href="">Cara Pesan</a></li>
                            <li><a href="">Hubungi kami</a></li>
                            <li><a href="">Pusat Bantuan</a></li>
                            <li><a href="">Karier</a></li>
                            <li><a href="">Cicilan</a></li>
                            <li><a href="">Tentang Kami</a></li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div class="follow">Follow kami di
                        <div class="icon1">
                            <img src={twitter}/>
                            <div class="text1">
                                <a href="">Twitter</a>
                            </div>
                        </div>
                        <div class="icon2">
                            <img src={facebook}/>
                            <div class="text2">
                                <a href="">Facebook</a>
                            </div>
                        </div>
                        <div class="icon3">
                            <img src={instagram}/>
                            <div class="text3">
                                <a href="">Instagram</a>    
                            </div>
                        </div>
                        <div class="icon4">
                            <img src={googleplus}/>
                            <div class="text4">
                                <a href="">Google+</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="download">Download Traveloka App
                        <div class="logo1">
                            <a href=""><img src={android}/></a>
                        </div>
                        <div class="logo2">
                            <a href=""><img src={apple}/></a>
                        </div>
                    </div>
                </Col>
            </Row>
            
            <div class="copyright">Copyright © 2019 Traveloka</div>
        </Container>
      );
    }
  }
  
  export default Footer;
  