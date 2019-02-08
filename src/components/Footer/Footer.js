import React, { Component } from 'react';
import axios from 'axios';
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

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footers: [],
            sosmeds: []
        };
    }
        
    componentDidMount(){
        axios.all([ //penggunaan 2 axios
            axios.get('https://backend-evolve.herokuapp.com/footers/about'),
            axios.get('https://backend-evolve.herokuapp.com/footers/sosmed')
        ])
        .then(axios.spread ((footersRes,sosmedsRes) => { //untuk menampilkan 2 API sekaligus
            console.log(footersRes);
            console.log(sosmedsRes);
            this.setState({
                footers: footersRes.data.data,
                sosmeds: sosmedsRes.data.data
            })
        })).catch(err => {
            console.log(err);
        });
    }
    
    render() {
      return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <img src={pict1} alt="logo-traveloka"/>
                        <br/>
                        <div className="img">
                            <img src={pict2} alt="logo-24"/>
                            <div className="text1">Hubungi Kami
                                <div className="text2">0804-1500-308</div>
                            </div>
                        </div>
                        <br/>
                        <img src={pict3} alt="logo-1"/> &nbsp;
                        <img src={pict4} alt="logo-2"/> &nbsp;
                        <img src={pict5} alt="logo-3"/>
                    </Col>
                    <Col>
                        <div className="About">Tentang Traveloka</div>
                        <div className="list">
                            <ul>
                                {this.state.footers.map((footer) => 
                                    <li key={footer.id}><a href={footer.path_url}>{footer.name}</a></li>
                                )}
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="follow" >Follow kami di 
                            {this.state.sosmeds.map((sosmed) =>
                                <div className="icon2" key={sosmed.id}>
                                    <div className="svg" dangerouslySetInnerHTML={{__html:sosmed.icon}}></div>
                                    {/* <img src={sosmed.icon} alt="sosial-media"/> */}
                                    <div className="text2">
                                        <a href ={sosmed.path_url}>{sosmed.name}</a>
                                        
                                    </div>
                                </div>    
                            )}
                        </div>
                    </Col>
                    <Col>
                        <div className="download">Download Traveloka App
                            <div className="logo1">
                                <a href="https://play.google.com/store/apps/details?id=com.traveloka.android&hl=en"><img src={android} alt="logo-playstore"/></a>
                            </div>
                            <div className="logo2">
                                <a href="https://itunes.apple.com/us/app/traveloka-book-flight-hotel/id898244857?mt=8"><img src={apple} alt="logo-appstore"/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="jarak">
                <div className="copyright">Copyright © 2019 Traveloka</div>
            </div>
        </div>
      );
    }
  }
  
  export default Footer;
  