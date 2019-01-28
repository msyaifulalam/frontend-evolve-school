import React, { Component } from 'react';
import '../Footer/Footer.css';
import {
    Container,
    Row,
    Col,
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
          //kasih tau sendy tambahin mt-3 di div footer, dan kasih style di container
        <div class="footer mt-3"> 
            <Container style={{backgroundColor:'transparent', boxShadow:'none'}}>
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
                                    <a href="https://twitter.com/traveloka?lang=en">Twitter</a>
                                </div>
                            </div>
                            <div class="icon2">
                                <img src={facebook}/>
                                <div class="text2">
                                    <a href="https://www.facebook.com/TravelokaID/?brand_redir=1391950997779915">Facebook</a>
                                </div>
                            </div>
                            <div class="icon3">
                                <img src={instagram}/>
                                <div class="text3">
                                    <a href="https://www.instagram.com/traveloka/?hl=en">Instagram</a>    
                                </div>
                            </div>
                            <div class="icon4">
                                <img src={googleplus}/>
                                <div class="text4">
                                    <a href="https://plus.google.com/+Traveloka">Google+</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="download">Download Traveloka App
                            <div class="logo1">
                                <a href="https://play.google.com/store/apps/details?id=com.traveloka.android&hl=en"><img src={android}/></a>
                            </div>
                            <div class="logo2">
                                <a href="https://itunes.apple.com/us/app/traveloka-book-flight-hotel/id898244857?mt=8"><img src={apple}/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div class="copyright">Copyright © 2019 Traveloka</div>
            </Container>
        </div>
      );
    }
  }
  
  export default Footer;
  