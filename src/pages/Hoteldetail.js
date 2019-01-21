import React ,{ Component } from 'react';
import { Button } from 'reactstrap';
import './Hoteldetail.css';

export default class Hoteldetail extends Component {
    render () {
        return (
            <div className="App">
                <div className="container" style={{width:'50%', height:'50%'}}>
                    <div className="title">
                        <h5>Jakarta Airport Hotel Managed by Topotels</h5>
                    </div>
                    <div className="svg-rate mt-2">
                        <Button color="primary">Hotel</Button>{' '}
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" class="_1Akal tvat-starIcon" height="24" stroke-linecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g>
                        </svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" class="_1Akal tvat-starIcon" height="24" stroke-linecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g>
                        </svg>
                        <svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" class="_1Akal tvat-starIcon" height="24" stroke-linecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g>
                        </svg>
                    </div>
                    <div className="location mt-2">
                        <svg fill="8F8F8F" stroke="none" viewBox="0.093443203 0 11.2125 12" class="_1qe1u" width="16" height="16" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink"><g transform="translate(1.308119, 0.5)"><path d="M1.51262719,7.70621739 L4.35698656,10.8804348 L7.19464281,7.7133913 L7.19339008,7.71338972 L7.19473219,7.7133913 C7.92626656,6.93382609 8.37895094,5.85486957 8.37895094,4.66304348 C8.37895094,2.2856087 6.57804469,0.358695652 4.35707594,0.358695652 C2.13566031,0.358695652 0.335200937,2.2856087 0.335200937,4.66304348 C0.335200937,5.85127862 0.785019976,6.92716844 1.51271674,7.7062175 Z"></path><ellipse fill="#fff" cx="4.35885934" cy="4.665061" rx="1.78932809" ry="1.91499996"></ellipse></g></svg>
                        <span>Terminal 2E International depature Bandara International soekarno Hatta, Cengkareng, Benda, Jakarta, Indonesia, 19110</span>
                    </div>
                    <div className="carousel mt-2">
                        <img style={{width:'695px'}}
                        src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000088824_wh_6" alt="#"></img>
                    </div>
                    <div className="thumbnail">
                        <div className="thumbnail-img mt-2">
                            <img style={{marginRight:'10px', width:'162px', height:'116px'}}
                            src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000076416_t2_7" alt="#" class="img-thumbnail"></img>

                            <img style={{marginRight:'10px', width:'162px', height:'116px'}}src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000088824_t2_6" alt="#" class="img-thumbnail"></img>

                            <img style={{marginRight:'10px', width:'162px', height:'116px'}}src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000121498_t2_7" alt="#" class="img-thumbnail"></img>

                            <img style={{marginRight:'10px', width:'162px', height:'116px'}}src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000076416_t2_7" alt="#" class="img-thumbnail"></img>
                        </div>
                    </div>
                    <div className="facility mt-2">
                        <h5>Hotel Facility</h5>
                    </div>
                    <div className="box-facility">
                        <div className="Parking">
                            <div className="img-facility">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833756238-56e24fb64a964d38b8f393bf093a77a9.png"></img>
                            </div>
                            <span>Parking</span>
                        </div>

                        <div className="AC">
                            <div className="img-facility">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2016/12/21/1482301285653-0a04df7d3f807b32484ceec10d9681c6.png"></img>
                            </div>
                            <span>AC</span>
                        </div>

                        <div className="frontdesk">
                            <div className="img-facility">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833738654-d8acba985778fc0cc5dd1d56d6cf48c5.png"></img>
                            </div>
                            <span>24-Hours Front Desk</span>
                        </div>

                        <div className="Elevator">
                            <div className="img-facility">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833714411-48c9b7565018d02dc32837738df1c917.png"></img>
                            </div>
                            <span>Elevator</span>
                        </div>

                        <div className="Wifi">
                            <div className="img-facility">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2017/06/07/1496833833458-7b6ab67bc5df6ef9f2caee150aae1f43.png"></img>
                            </div>
                            <span>Wifi</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

