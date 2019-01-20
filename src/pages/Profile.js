import React, { Component } from 'react';
import '../App.css';
import './Pages.css';
import classnames from 'classnames';
import {
    Container,
    Row, Col,
    ListGroup,
    ListGroupItem,
    TabContent, TabPane,
    // Card, Button, CardTitle, CardText
} from 'reactstrap';

class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          isActive: false
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab,
          });
        }
      }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                    <Row>
                        <Col xs="4">
                        <ListGroup>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Ubah Profile</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Poin Saya</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Tagihan Saya</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>Kartu Saya</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.toggle('5'); }}>Daftar Pembelian</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '6' })} onClick={() => { this.toggle('6'); }}>Pesanan Saya</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '7' })} onClick={() => { this.toggle('7'); }}>Passenger Quick Pick</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '8' })} onClick={() => { this.toggle('8'); }}>Info Promo</ListGroupItem>
                            <ListGroupItem className={classnames({ active: this.state.activeTab === '9' })} onClick={() => { this.toggle('9'); }}>Best Price Guarantee</ListGroupItem>
                            <ListGroupItem tag="a" href="/" action>Log Out</ListGroupItem>
                        </ListGroup>
                        </Col>
                        <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <div className="textBox">
                                        <div className="flex-container">
                                            <div className="icon">
                                                <svg stroke-width="0" fill="#696969" height="16" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g><path d="M18,14 L18,9 C18,5.69126752 15.31082,3 12,3 C8.69126752,3 6,5.68918004 6,9 L6,15 C6,15.5522847 5.55228475,16 4.99508929,16 C4.44571633,16 4,16.4469077 4,17 L4,18 L20,18 L20,17 C20,16.4427199 19.5571894,16 19,16 C18.9998814,16 18.9997629,16 18.9996443,15.9999999 C18.9995258,16 18.9994072,16 18.9992886,16 L9.00071136,16 C8.44803373,16 8,15.5522847 8,15 C8,14.4477153 8.44803373,14 9.00071136,14 L18,14 Z M8.12593172,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,17 C2,15.6927136 2.83457175,14.5803364 4,14.1694509 L4,9 C4,4.58426299 7.58704527,1 12,1 C16.415737,1 20,4.58704527 20,9 L20,14.1686514 C21.1661319,14.5781112 22,15.6881556 22,17 L22,19 C22,19.5522847 21.5522847,20 21,20 L15.8737502,20 C15.4291117,21.7246856 13.8617121,23 12,23 C10.1357984,23 8.56982075,21.7256479 8.12593172,20 Z M10.2673013,20 L13.7316466,20 C13.3852986,20.5974677 12.7386747,21 12,21 C11.2593077,21 10.6129727,20.5979654 10.2673013,20 Z"></path></g></svg>
                                            </div>
                                            <div className="notifText">
                                                Want to receive updates on new login and other account activities?
                                            </div>
                                            <div className="textLink">Allow desktop notifications</div>
                                        </div>
                                    </div>
                                    <div className="textBox">
                                        <div className="flex-container">
                                            <div className="icon">
                                                <svg stroke-width="0" fill="#8F8F8F" height="24" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke-width="0"><rect width="24" height="24"></rect><path stroke="#8F8F8F" stroke-width="2" d="M8.79293565,14 L15.2068466,14 L15.2068466,14 C17.5134696,14 19.4615386,15.7124173 19.7573005,18 L19.9827249,19.7435542 L19.9827249,19.7435542 C20.124356,20.8390059 19.3511317,21.8418596 18.25568,21.9834907 C18.1706403,21.9944855 18.0849816,22 17.9992342,22 L6.00054804,22 L6.00054804,22 C4.89597854,22 4.00054804,21.1045695 4.00054804,20 C4.00054804,19.9142525 4.0060625,19.8285938 4.01705729,19.7435542 L4.24248169,18 L4.24248169,18 C4.53824361,15.7124173 6.48631263,14 8.79293565,14 Z"></path><path stroke="#8F8F8F" stroke-width="2" d="M11,2 L13,2 L13,2 C14.6568542,2 16,3.34314575 16,5 L16,7 L16,7 C16,9.209139 14.209139,11 12,11 L12,11 L12,11 C9.790861,11 8,9.209139 8,7 L8,5 L8,5 C8,3.34314575 9.34314575,2 11,2 Z"></path></g></svg>
                                            </div>
                                            <div className="editProfileTitle">Riyandi Novian Iskandar Tandung</div>
                                        </div>
                                    </div>
                                    <div className="textBox">
                                        <div className="flex-container">
                                            <div className="icon">
                                                <svg stroke-width="0" fill="#8F8F8F" height="24" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke-width="0"><rect width="24" height="24"></rect><path stroke="#8F8F8F" stroke-linejoin="round" stroke-width="2" d="M8,19 L10,20 L10,20 L10,20 C10,21.1045695 10.8954305,22 12,22 L12,22 L12,22 C13.1045695,22 14,21.1045695 14,20 L14,20 L16,19 L16.7350889,19.3675445 L16.7350889,19.3675445 C17.4904815,19.7452408 18.4028097,19.5971903 19,19 L19,19 L19,19 C19.5971903,18.4028097 19.7452408,17.4904815 19.3675445,16.7350889 L19,16 L20,14 L20,14 L20,14 C21.1045695,14 22,13.1045695 22,12 L22,12 L22,12 C22,10.8954305 21.1045695,10 20,10 L20,10 L19,8 L19.3675445,7.26491106 L19.3675445,7.26491106 C19.7452408,6.50951846 19.5971903,5.59719029 19,5 L19,5 L19,5 C18.4028097,4.40280971 17.4904815,4.25475923 16.7350889,4.63245553 L16,5 L14,4 L14,4 L14,4 C14,2.8954305 13.1045695,2 12,2 L12,2 L12,2 C10.8954305,2 10,2.8954305 10,4 L10,4 L8,5 L7.26491106,4.63245553 L7.26491106,4.63245553 C6.50951846,4.25475923 5.59719029,4.40280971 5,5 L5,5 L5,5 C4.40280971,5.59719029 4.25475923,6.50951846 4.63245553,7.26491106 L5,8 L4,10 L4,10 L4,10 C2.8954305,10 2,10.8954305 2,12 L2,12 L2,12 C2,13.1045695 2.8954305,14 4,14 L4,14 L5,16 L4.63245553,16.7350889 L4.63245553,16.7350889 C4.25475923,17.4904815 4.40280971,18.4028097 5,19 L5,19 L5,19 C5.59719029,19.5971903 6.50951846,19.7452408 7.26491106,19.3675445 L8,19 Z"></path><circle cx="12" cy="12" r="4" stroke="#8F8F8F" stroke-width="2"></circle></g></svg>
                                            </div>
                                            <div className="editProfileTitle">Enable login verification code</div>
                                        </div>
                                        <hr className="margin"/>
                                        <div className="flex-container">
                                            <div className="icon">☐</div>
                                            <div className="editProfileTitle2">Send me a verification code every time I log in from new device</div>
                                        </div>
                                    </div>
                                    <div className="textBox">
                                        <div className="flex-container">
                                            <div className="icon">
                                                <svg stroke-width="0" fill="#8F8F8F" height="24" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke-width="0"><rect width="24" height="24"></rect><rect width="12" height="20" x="6" y="2" stroke="#8F8F8F" stroke-width="2" rx="2"></rect><path stroke="#8F8F8F" stroke-width="2" d="M6 6L18 6M6 16L18 16"></path><path stroke="#8F8F8F" stroke-linecap="round" stroke-width="2" d="M11,19 L13,19"></path></g></svg>
                                            </div>
                                            <div className="editProfileTitle">Phone</div>
                                            <div className="contactButton">
                                                <button className="BTN">
                                                <div className="margin-right-8">
                                                    <svg fill="#0770cd" width="16" height="16" viewBox="0 0 16 16" stroke-width="0" stroke="currentColor" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke-width="0"><rect width="16" height="16"></rect><circle cx="8" cy="8" r="7" stroke="#0770cd" stroke-width="2"></circle><path stroke="#0770cd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5L8 11M5 8L11 8"></path></g></svg>
                                                </div>
                                                    Phone
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="editProfileText">Mobile number to receive account-related notification.</div>
                                        </div>
                                    </div>
                                    <div className="textBox-item">
                                        <div className="flex-container">
                                            <div className="editProfileItem">
                                                1. *********97908
                                                <small className="notifRecipient">Recipient for notifications</small>
                                            </div>
                                            <div className="icon-2">
                                                <svg fill="#696969" width="16" height="16" viewBox="0 0 16 16" stroke-width="0" stroke="currentColor" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke-width="0"><rect width="16" height="16"></rect><path stroke="#696969" stroke-width="2" d="M3,6 L13,6 L13,13 L13,13 C13,14.1045695 12.1045695,15 11,15 L5,15 L5,15 C3.8954305,15 3,14.1045695 3,13 L3,6 Z"></path><path stroke="#696969" stroke-linecap="round" stroke-width="2" d="M10 6L10 13M6 6L6 13"></path><rect width="4" height="2" x="6" y="1" stroke="#696969" stroke-width="2" rx="1"></rect><rect width="12" height="3" x="2" y="3" stroke="#696969" stroke-width="2" rx="1.5"></rect></g></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textBox">
                                        <div className="flex-container">
                                            <div className="icon">
                                                <svg stroke-width="0" fill="#8F8F8F" height="24" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M10.3101058,14.4127154 L7.9682799,17.0890879 L5.74902235,15.1296915 C5.33534873,14.7644564 5,14.0113105 5,13.4721494 L5,9 L4.99508929,9 C4.44480545,9 4,9.41001651 4,9.9155854 L4,20.0844146 C4,20.4631545 4.25128662,20.7892665 4.60896765,20.9283019 L11.2474233,13.3414954 C11.6458346,12.8861682 12.3541654,12.8861682 12.7525767,13.3414954 L19.3912418,20.9285413 C19.7491886,20.7898104 20,20.4640519 20,20.0844146 L20,9.9155854 C20,9.41110633 19.5541656,9 19.0049107,9 L19,9 L19,13.4721494 C19,14.0223496 18.6595006,14.769004 18.2509776,15.1296915 L16.0317201,17.0890879 L13.6898942,14.4127154 L14.6272117,15.4839354 L16.2230604,14.1708845 C16.6498869,13.8196952 17,13.0855598 17,12.5353105 L17,4.99201702 C17,4.45079424 16.5467763,4 15.9914698,4 L8.0085302,4 C7.45125696,4 7,4.44713164 7,4.99201702 L7,12.5353105 C7,13.0845221 7.34784772,13.8178313 7.77693962,14.1708845 L9.37278827,15.4839354 L10.3101058,14.4127154 L10.3101058,14.4127154 Z M19,7 L19.0049107,7 C20.658264,7 22,8.26148141 22,9.815891 L22,20.184109 C22,21.7397749 20.6591391,23 19.0049107,23 L4.99508929,23 C3.34173604,23 2,21.7385186 2,20.184109 L2,9.815891 C2,8.26022509 3.34086088,7 4.99508929,7 L5,7 L5,4.99201702 C5,3.33842963 6.35077822,2 8.0085302,2 L15.9914698,2 C17.6489467,2 19,3.34381127 19,4.99201702 L19,7 Z M16.7962318,21 L7.20376823,21 L12,15.5185923 L16.7962318,21 Z M8,7 C8,6.44771525 8.45303631,6 8.99703014,6 L15.0029699,6 C15.5536144,6 16,6.44386482 16,7 C16,7.55228475 15.5469637,8 15.0029699,8 L8.99703014,8 C8.4463856,8 8,7.55613518 8,7 Z M9,11 C9,10.4477153 9.45097518,10 9.99077797,10 L14.009222,10 C14.5564136,10 15,10.4438648 15,11 C15,11.5522847 14.5490248,12 14.009222,12 L9.99077797,12 C9.44358641,12 9,11.5561352 9,11 Z"></path></svg>
                                            </div>
                                            <div className="editProfileTitle">Email</div>
                                            <div className="contactButton">
                                                <button className="BTN">
                                                <div className="margin-right-8">
                                                    <svg fill="#0770cd" width="16" height="16" viewBox="0 0 16 16" stroke-width="0" stroke="currentColor" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke-width="0"><rect width="16" height="16"></rect><circle cx="8" cy="8" r="7" stroke="#0770cd" stroke-width="2"></circle><path stroke="#0770cd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5L8 11M5 8L11 8"></path></g></svg>
                                                </div>
                                                    Email Address
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="editProfileText">Email address to receive account-related notification.</div>
                                        </div>
                                    </div>
                                    <div className="textBox-item">
                                        <div className="flex-container">
                                            <div className="editProfileItem">
                                                1. riyandi.novian@ymail.com
                                                <small className="notifRecipient">Recipient for notifications</small>
                                            </div>
                                            <div className="icon-2">
                                                <svg fill="#696969" width="16" height="16" viewBox="0 0 16 16" stroke-width="0" stroke="currentColor" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke-width="0"><rect width="16" height="16"></rect><path stroke="#696969" stroke-width="2" d="M3,6 L13,6 L13,13 L13,13 C13,14.1045695 12.1045695,15 11,15 L5,15 L5,15 C3.8954305,15 3,14.1045695 3,13 L3,6 Z"></path><path stroke="#696969" stroke-linecap="round" stroke-width="2" d="M10 6L10 13M6 6L6 13"></path><rect width="4" height="2" x="6" y="1" stroke="#696969" stroke-width="2" rx="1"></rect><rect width="12" height="3" x="2" y="3" stroke="#696969" stroke-width="2" rx="1.5"></rect></g></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textBox">
                                        <div className="flex-container">
                                            <div className="icon">
                                                <svg stroke-width="0" fill="#8F8F8F" height="24" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd"><rect width="24" height="24"></rect><circle cx="12" cy="12" r="10" stroke="#8F8F8F" stroke-width="2"></circle><path stroke="#8F8F8F" stroke-width="2" d="M8 21L16 3M21 16L3 8M17 14C15.4172772 17.5611262 12.4172772 19.8944595 8 21 5.64438956 17.4667902 5.31105622 13.8001235 7 10 8.68894378 6.1998765 11.6889438 3.86654317 16 3 18.2493894 6.77220712 18.5827228 10.4388738 17 14z"></path></g></svg>
                                            </div>
                                            <div className="editProfileTitle">Linked Accounts</div>
                                        </div>
                                        <div>
                                            <div className="editProfileText">For an easier login, connect your social accounts with Traveloka.</div>
                                        </div>
                                    </div>
                                    <div className="textBox-item">
                                        <div className="flex-container">
                                            <div className="editProfileItem">
                                                <div className="editProfileItem-1">
                                                    <div className="margin-right-10">
                                                        <svg viewBox="0 0 128 128" class="_2yXK7" fill="none" height="24" stroke="currentColor" stroke-linecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="_x31__stroke"><g id="Facebook_1_"><rect fill="none" height="128" width="128"></rect><path d="M68.369,128H7.065C3.162,128,0,124.836,0,120.935    V7.065C0,3.162,3.162,0,7.065,0h113.871C124.837,0,128,3.162,128,7.065v113.87c0,3.902-3.163,7.065-7.064,7.065H88.318V78.431    h16.638l2.491-19.318H88.318V46.78c0-5.593,1.553-9.404,9.573-9.404l10.229-0.004V20.094c-1.769-0.235-7.841-0.761-14.906-0.761    c-14.749,0-24.846,9.003-24.846,25.535v14.246H51.688v19.318h16.681V128z" fill="#4460A0" fill-rule="evenodd"></path></g></g></svg>
                                                    </div>
                                                    Facebook
                                                </div>
                                            </div>
                                            <div className="textLink">Link Account</div>
                                        </div>
                                        <div className="flex-container">
                                            <div className="editProfileItem">
                                                <div className="editProfileItem-1">
                                                    <div className="margin-right-10">
                                                        <svg viewBox="0 0 50 50" stroke-width="0" class="_2yXK7" fill="none" height="24" stroke="currentColor" stroke-linecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><path d="M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z" fill="#FFFFFF"></path><g><g><path d="M20.3,10.5c3.3-1.1,7-1.1,10.3,0.1c1.8,0.7,3.5,1.7,4.9,3.1c-0.5,0.5-1,1-1.5,1.5    c-0.9,0.9-1.9,1.9-2.8,2.8c-0.9-0.9-2.1-1.6-3.3-1.9c-1.4-0.4-3-0.5-4.5-0.2c-1.7,0.4-3.3,1.3-4.6,2.5c-1,1-1.8,2.3-2.2,3.6    c-1.7-1.3-3.3-2.6-5-3.9C13.4,14.6,16.6,11.8,20.3,10.5z" fill="#EA4335"></path></g><g><path d="M10.3,22c0.3-1.3,0.7-2.6,1.3-3.9c1.7,1.3,3.3,2.6,5,3.9c-0.7,1.9-0.7,4,0,6c-1.7,1.3-3.3,2.6-5,3.9    C10.1,28.8,9.6,25.3,10.3,22z" fill="#FBBC05"></path></g><g><path d="M25.3,22.1c4.8,0,9.6,0,14.4,0c0.5,2.7,0.4,5.5-0.4,8.1c-0.7,2.4-2,4.6-3.9,6.4c-1.6-1.3-3.2-2.5-4.9-3.8    c1.6-1.1,2.7-2.8,3.1-4.7c-2.8,0-5.6,0-8.3,0C25.3,26.1,25.3,24.1,25.3,22.1z" fill="#4285F4"></path></g><g><path d="M11.6,31.9c1.7-1.3,3.3-2.6,5-3.9c0.6,1.9,1.9,3.6,3.5,4.7c1,0.7,2.2,1.2,3.4,1.5c1.2,0.2,2.4,0.2,3.7,0    c1.2-0.2,2.4-0.7,3.4-1.3c1.6,1.3,3.2,2.5,4.9,3.8c-1.8,1.6-3.9,2.7-6.3,3.3c-2.6,0.6-5.3,0.6-7.8-0.1c-2-0.5-3.9-1.5-5.6-2.8    C14.1,35.6,12.6,33.8,11.6,31.9z" fill="#34A853"></path></g></g></svg>
                                                    </div>
                                                    Google
                                                </div>
                                            </div>
                                            <div className="textLink">Link Account</div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                    </Container>
                </header>
            </div>
        );
    }
}

export default Profile;