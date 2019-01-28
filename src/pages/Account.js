import React, { Component } from 'react';
import '../App.css';
import './Pages.css';
import Profile from '../components/Profile/Profile';
import Tanggalbeli from '../components/DaftarPembelian/Tanggalbeli'
import classnames from 'classnames';
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
                                    <Row>
                                    <Card body>
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
        );
    }
}

export default Account;
