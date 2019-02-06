import React ,{ Component } from 'react';
import { Button, Row, Col, Card, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Hoteldetail.css';
import HotelRoom from './HotelRoom/HotelRoom';
import './HotelRoom/HotelRoom.css';
import axios from 'axios';

export default class Hoteldetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: [],
            name: [],
            address: [],
            phone: [],
            city: [],
            rating: [],
            price: [],
            type: [],
        };
    }

    componentDidMount(){
        axios.get('https://backend-evolve.herokuapp.com/hotel/1')
        .then(response => {
            console.log(response);
            this.setState({
                id: response.data.data.id,
                name: response.data.data.name,
                address: response.data.data.address,
                phone: response.data.data.phone,
                city: response.data.data.city,
                rating: response.data.data.rating,
                price: response.data.data.price,
                type: response.data.data.type
            })
        }).catch(err => {
            console.log(err);
        });
    }

    renderRating(){
        let rating = [];
        for (let i = 0; i < this.state.rating; i++) {
            rating.push(<svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g>
            </svg>);
        }
        return rating;
    }

    render () {
        return (
        <div>
            <div className="detailhotel">
                <div className="hoteldetail">
                    <div className="isi">
                        <div className="title">
                            <h5>{this.state.name}</h5>
                        </div>
                        <div className="svg-rate mt-2">
                            <Button color="primary">{this.state.type}</Button>{' '}
                            {this.renderRating()}
                        </div>
                        <div className="location mt-2">
                            <span>{this.state.address}{','}{this.state.city}</span>
                        </div>
                        <Row>
                            <Col md={9}>
                                <div className="carousel mt-3" >
                                    <img alt="carousel" style={{width:'630px', height:'360px'}}
                                    src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000088824_wh_6" alt="#"></img>
                                </div>
                                <div className="thumbnail">
                                    <div className="thumbnail-img mt-2">
                                        <img alt="thumbnail" style={{width:'165px', height:'116px'}}
                                        src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000076416_t2_7" alt="#" className="img-thumbnail"></img>

                                        <img alt="thumbnail" style={{width:'165px', height:'116px'}}src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000088824_t2_6" alt="#" className="img-thumbnail"></img>

                                        <img alt="thumbnail" style={{width:'165px', height:'116px'}}src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000121498_t2_7" alt="#" className="img-thumbnail"></img>

                                        <img alt="thumbnail" style={{width:'165px', height:'116px'}}src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000076416_t2_7" alt="#" className="img-thumbnail"></img>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={3} md={3} style={{display:'nowrap', lineHeight:'1.25'}} className="sideInfo">
                                <div className="impressive mt-2" style={{color:'#1ba0e2', fontSize:'24px', fontWeight:'600'}}>
                                    <p>Impressive <br/>
                                    <span>8.5</span><span style={{fontSize:'14px'}}>/10</span>
                                    </p>
                                </div>
                                <div className="accrording" style={{color:'#434343', fontSize:'14px'}}>
                                    <p>According to 1,200 guests</p>
                                </div>
                                <div className="card" >
                                    <Card style={{backgroundColor:'#f6f6f6', border:'none', padding:'16px'}}>
                                        <CardText style={{fontSize:'12px'}}>
                                            <p>10 guests talked about Friendly Staffs</p>
                                            <p>The room is big. The view is interesting for children. They can watch airplanes taking off and landing. The staff is friendly. I got three of breakfast boxes when check out at 5 am. I will recommend this hotel to my relatives and friends.</p>
                                            <p>- Yuli Y. -</p>
                                        </CardText>
                                    </Card>
                                </div>
                                
                                <div className="see-all">
                                    <Link to={``}>See all reviews</Link>
                                </div>
                                <hr/>
                                <div className="rate-viewer">
                                    <img alt="rate-viiewer" style={{width:'83px', height:'14px'}} src= "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.5-26258-5.svg"/>
                                    <p style={{fontSize:'12px', marginTop:'5px'}}>Based on 519 traveler reviews</p>
                                </div>
                                <hr/>
                                <div className="price">
                                    <p>starting from</p>
                                    <p style={{color:'orange', fontSize:'20px', fontWeight:'600'}}>Rp&nbsp;{this.state.price}</p>
                                </div>
                                <div className="book-now" >
                                    <Button color="warning" style={{width:'200px', margin:'0'}}>Book Now</Button>{``}
                                </div>
                            </Col>
                        </Row>
                                
                        {/* facility */}
                        <div className="facility mt-2">
                            <h5>Hotel Facility</h5>
                        </div>
                        <div className="box-facility">
                            <div className="Parking">
                                <div className="img-facility">
                                    <img alt="img-facility" src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"></img>
                                </div>
                                <div className="name-facility">Parking</div>
                            </div>
                            <div className="AC">
                                <div className="img-facility">
                                    <img alt="img-facility" src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2016/12/21/1482301285653-0a04df7d3f807b32484ceec10d9681c6.png"></img>
                                </div>
                                <div className="name-facility">AC</div>
                            </div>
                            <div className="frontdesk">
                                <div className="img-facility">
                                    <img alt="img-facility" src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"></img>
                                </div>
                                <div className="name-facility">24-Hours Front Desk</div>
                            </div>
                            <div className="Elevator">
                                <div className="img-facility">
                                    <img alt="img-facility" src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"></img>
                                </div>
                                <div className="name-facility">Elevator</div>
                            </div>
                            <div className="Wifi">
                                <div className="img-facility">
                                    <img alt="img-facility" src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"></img>
                                </div>
                                <div className="name-facility">Wifi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="room"><HotelRoom/></div>
        </div>
        );
    }
}

