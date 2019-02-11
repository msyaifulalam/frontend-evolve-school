import React, { Component } from 'react';
import '../App.css';
import './Account.css';
import Profile from '../components/Profile/Profile';
import Tanggalbeli from '../components/DaftarPembelian/Tanggalbeli'
import classnames from 'classnames';
import Navigasi from '../components/Navigasi/Navigasi';
import Footer from '../components/Footer/Footer';
import {
    Container,
    Row, Col,
    ListGroup,
    ListGroupItem,
    TabContent, TabPane,
    Card, Button, CardTitle, CardText
} from 'reactstrap';

class Account extends Component {
    constructor(props) {
        super(props);
    
        this.goTo = this.goTo.bind(this);
        this.state = {
          activeTab: '1',
          isActive: false
        };
      }

      componentDidMount(){
        this.handleTab('profile')
      }

      handleTab(param){
        switch (param) {
          case 'profile':
              this.setState({ activeTab: '1'})
              break;
          case 'purchase':
              this.setState({ activeTab: '5'})
              break;
          default:
              this.setState({ activeTab: '1'})
              break;
        }
      }
    
      goTo(path) {
          this.props.router.history.push(`/main-menu/${path}`);
          this.handleTab(path)
      }

    render() {
        return (
            <div>
                <Navigasi/>
                <div className="App">
                    <header className="App-header">
                        <Container className="Acc-Container">
                        <Row>
                            <Col xs="4">
                            <ListGroup>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.goTo('profile'); }}>Ubah Profile</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.goTo('point'); }}>Poin Saya</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.goTo('biling'); }}>Tagihan Saya</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.goTo('mycard'); }}>Kartu Saya</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.goTo('purchase'); }}>Daftar Pembelian</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '6' })} onClick={() => { this.goTo('order'); }}>Pesanan Saya</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '7' })} onClick={() => { this.goTo('passenger'); }}>Passenger Quick Pick</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '8' })} onClick={() => { this.goTo('promo'); }}>Info Promo</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '9' })} onClick={() => { this.goTo('bestprice'); }}>Best Price Guarantee</ListGroupItem>
                                <ListGroupItem tag="a" href="/" action>Log Out</ListGroupItem>
                            </ListGroup>
                            </Col>
                            <Col xs="8">
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Profile/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                        <Card body>
                                            <CardTitle>Poin Saya</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Row>
                                        <Card body>
                                            <CardTitle>Tagihan Saya</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Row>
                                        <Card body>
                                            <CardTitle>Kartu Saya</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="5">
                                        <Row className="top">
                                        <Card className="nobackground" body>
                                            <Tanggalbeli/>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="6">
                                        <Row>
                                        <Card body>
                                            <CardTitle>Pesanan Saya</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="7">
                                        <Row>
                                        <Card body>
                                            <CardTitle>Passenger Quick Pick</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="8">
                                        <Row>
                                        <Card body>
                                            <CardTitle>Info Promo</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="9">
                                        <Row>
                                        <Card body>
                                            <CardTitle>Best Price Guarantee</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                        </Container>
                    </header>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Account;
