import React ,{ Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import './HotelRoom.css';
import axios from 'axios';
import classnames from 'classnames';

export default class HotelRoom extends Component {

    constructor(props){
        super(props);
        this.state = {
            rooms : [],
        };
    }

    componentDidMount(){
        axios.get('https://backend-evolve.herokuapp.com/hotel/1')
        .then(response => {
            console.log(response);
            this.setState({
                rooms : response.data.data.rooms
            })
        }).catch(err => {
            console.log(err);
        });
    }


    render () {
        return (
            <div className="container room">
                {this.state.rooms.map((hotelRoom, key) => 
                    <div className="hotelroom" key={key}>
                        <Row >
                        <Col xs={5} md={5}>
                            <div className="roomName">
                                <div className="imgBed">
                                    <img alt="imgbed" src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/11467316_0_t2_hr_10017799-1024x682-FIT-AND-TRIM-25a0ab86b01437cc4d6a04ee2ab3141b.jpeg"/>
                                </div>
                                <div className="detailBed">
                                    <div className="bedName">Room {hotelRoom.type}</div>
                                    <div className="guest">
                                        <img alt="guest" className="svgGuest" src="https://dkp56lbqbfu1n.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-ui/desktop/shared/images/ic-sys-guest-passenger-127ec4d061508d0ab88f105c7395a297.svg"/>
                                        <div className="qtyGuest">2 Guests</div>
                                    </div>

                                    <div className="twinBed">
                                         <svg fill="currentColor" stroke="none" className="svgTwin" strokeLinecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M22 19a.999.999 0 0 1 1 1c0 .552-.44 1-1.002 1H2.002A.999.999 0 0 1 1 20c0-.552.44-1 1.002-1H20v-2.5c0-1.379-1.118-2.5-2.492-2.5H6.492c-.812 0-1.535.393-1.99 1h13.497c.553 0 1.001.444 1.001 1 0 .552-.445 1-1 1H4a1 1 0 1 1-2 0v-.49c0-1.564.794-2.943 2-3.752V3.995C4 3.445 4.444 3 5 3c.552 0 1 .456 1 .995V5c.836-.628 1.876-1 3.004-1h6.002c1.123 0 2.16.372 2.994.999V3.995c0-.55.444-.995 1-.995.552 0 1 .456 1 .995v8.761a4.5 4.5 0 0 1 2 3.744V19zM6 9.267c.292-.17.63-.267.99-.267h4.02c.361 0 .7.096.992.265A1.97 1.97 0 0 1 12.991 9h4.018c.361 0 .7.096.991.264V9a3 3 0 0 0-2.994-3H9.004A3 3 0 0 0 6 9v.267zM16.99 11s-3.981 0-3.98-.001V12s3.981 0 3.98.001V11zM11 11l-4-.001V12l4 .001V11z"></path></svg>
                                        <div className="qtyTwin">{hotelRoom.type}</div>
                                    </div>

                                    <div className="refund">
                                        <svg viewBox="0 0 16 16" fill="none" className="svgRefund" height="24" stroke="currentColor" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g fill="#8F8F8F" fillRule="evenodd" stroke="none"><path d="M4.293 8.707l1.499 1.5 1.414-1.415-1.499-1.5a1 1 0 0 0-1.414 1.415z"></path><path fillRule="nonzero" d="M12 8.245V10h3v2.5c0 1.382-1.115 2.5-2.5 2.5H5.245l2-2H10v-2.755l2-2zm-9.516 6.688h-.003l-.775.774a1 1 0 0 1-1.413-1.413l.776-.776a1.995 1.995 0 0 1-.069-.52V3.002A2 2 0 0 1 2.998 1H12.5c.323 0 .631.06.915.172l.879-.88a1 1 0 0 1 1.413 1.414l-.879.88.001.002L10 7.417v-.004L4.413 13h.004l-1.933 1.933zM9 5.587l1-1V3s-7 0-7 .002c0 0 .002 5.827 0 8.584L8.587 6H4V4h5v1.587zM13 12h-1v1h.5c.28 0 .5-.221.5-.5V12z"></path></g></svg>
                                        <div className="noRefund">Non-refundable</div>
                                    </div>

                                    <div className="breakfast">
                                        <svg viewBox="0 0 16 16" className="svgBreakfast" fill="none" height="24" stroke="currentColor" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g fill="none" fillRule="evenodd" stroke="none"><path fill="#8F8F8F" fillRule="nonzero" d="M4.476 15.88c.17-.093.311-.234.404-.404l-.404.404zM7 4.644L2.866 8.778A3.001 3.001 0 0 1 1 6V4a3 3 0 1 1 6 0v.644zM3 4v2a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0zM10 10.356l4.983-4.983A4.003 4.003 0 0 1 12 8.874V15a1 1 0 0 1-2 0v-4.644zm.524-9.236l-.404.404c.093-.17.234-.311.404-.404zM9 2.644l-2 2V2a1 1 0 1 1 2 0v.644z"></path><path stroke="#8F8F8F" strokeLinecap="round" strokeWidth="2" d="M2 14L14 2"></path></g></svg>
                                        <div className="choiceBreakfast">Without Breakfast</div>
                                    </div>

                                    <div className="wifi">
                                        <svg viewBox="0 0 16 16" className="svgWifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g fill="none" fillRule="evenodd"><circle cx="8" cy="13" r="2" fill="#00A651" fillRule="nonzero"></circle><path stroke="#00A651" strokeLinecap="round" strokeWidth="2" d="M12 9a4.98 4.98 0 0 0-4-2 4.98 4.98 0 0 0-4 2M15 5a10.454 10.454 0 0 0-1.722-1.412A9.602 9.602 0 0 0 8 2c-1.93 0-3.735.58-5.278 1.588C2.103 3.993 1.526 4.467 1 5"></path></g></svg>
                                        <div className="network">Free Wifi</div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={4} md={4}>
                            <div className="detail">
                                <div className="info">
                                    <img alt="info" className="svgWorld" src="https://tvlk.imgix.net/imageResource/2017/10/25/1508923321293-6f688df73be6fdd7c655173c70d608c9.png?auto=compress%2Cformat&amp;cs=srgb&amp;fm=png&amp;ixlib=java-1.1.12&amp;q=75"/>
                                    <span className="subInfo">Installment is available for credit cardholders</span>
                                </div>
                                <div className="priceRoom">
                                    <span className="priceroom">Rp 1.233.333</span>
                                    <span>/ room / nights</span>
                                    <div className="roomPrice">{hotelRoom.price}</div>
                                </div>
                                <div className="tax">
                                    <div className="taxes">Inclusive of Taxes</div>
                                </div>
                                <div className="point">
                                    <div>
                                        <svg viewBox="0 0 12 12" fill="#00A0DE" stroke="#727272" className="svgPoint" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="[-Final]-Search-Result--hotel-card" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="GUIDE-Member-Only-Deal-Desktop-Search-Result--Hotel-card" transform="translate(-989.000000, -232.000000)"><g id="⌇glyph_product_fill_payment-points" transform="translate(989.000000, 232.000000)"><rect id="bound" x="0" y="0" width="12" height="12"></rect><path d="M2.54690541,7.65211455 C2.86281494,9.82836006 4.73619125,11.5 7,11.5 C9.48528137,11.5 11.5,9.48528137 11.5,7 C11.5,4.73619125 9.82836006,2.86281494 7.65211455,2.54690541 L8.55373192,6.15337486 L6.15337486,8.55373192 L2.54690541,7.65211455 Z" id="accent-shape" stroke="#0194F3"></path><path d="M5,10 C2.23857625,10 0,7.76142375 0,5 C0,2.23857625 2.23857625,0 5,0 C7.76142375,0 10,2.23857625 10,5 C10,7.76142375 7.76142375,10 5,10 Z M5,3 C3.8954305,3 3,3.8954305 3,5 C3,6.1045695 3.8954305,7 5,7 C6.1045695,7 7,6.1045695 7,5 C7,3.8954305 6.1045695,3 5,3 Z" id="shape" fill="#1BA0E2"></path></g></g></g></svg>Earn&nbsp;
                                        <span className="points">138 points</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={3} md={3} className="bookingButton">
                            <div className="booking">
                                <Button 
                                classnames={classnames({disabled : this.state.hotelRoom === "Penuh"})}
                                
                                disabled={hotelRoom.status==='Penuh'?true:false} color="warning">Book Now!
                                </Button>{' '}
                                <div className="roomAvailable">{hotelRoom.status}</div>
                            </div>
                        </Col>
                    </Row>
                    </div>
                )}
            </div>       
        );
    }
}