import React ,{ Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon, TabContent, TabPane }
from 'reactstrap';
import '../main-form/forms.css';
import { Button } from 'reactstrap';
import classnames from 'classnames';


export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Row className="show-grid mt-5">
            <Col sm={6} md={3}>
                <ListGroup>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }} 
                      tag="a" href="#" action>
                    Flights
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }} 
                      tag="a" href="#" action>
                    Hotels</ListGroupItem>
                  <ListGroupItem 
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }} 
                    tag="a" href="#" action>
                  Trains</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Bus & Shuttle</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Airport Transport</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Flight + Hotel</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Attractions & Activities</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Top-Up & Data Packages</ListGroupItem>
                </ListGroup>
            </Col>

            <Col sm={6} md={9}>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="2">
                  <p className="tagline-1">Hotel yang Terakhir Dilihat</p>
                  <form>
                    <Row form>
                      <Col md={8}>
                        <FormGroup>
                          <Label for="detination">Kota, tujuan, atau nama hotel</Label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                            <Input type="text" name="" id="destination" placeholder="Yogyakarta, Provinsi Yogyakarta, Indonesia"></Input> 
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="room">Tamu dan kamar</Label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                            <Input type="text" name="" id="room" placeholder="2 Tamu, 1 Kamar"></Input> 
                          </InputGroup> 
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row form>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="checkin">Check-in</Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                              <Input type="text" name="" id="chekin" placeholder="00:00"></Input> 
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="duration">Durasi</Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                              <Input type="text" name="" id="duration" placeholder="time"></Input> 
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="checkout">Check-Out:</Label>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup check>
                            <Label check>
                              <input type="checkbox" />
                              Tampilkan akomodasi ramah keluarga
                            </Label> 
                          </FormGroup>
                        </Col>
                      </Row>

                    <Row form>
                      <Col md={3}>
                        <p href="#">Bayar di Hotel</p>
                      </Col>
                      <Col md={5}>
                        <p href="#">Traveloka best price guarantee</p>
                      </Col>
                      <Col md={4}>
                        <Button color="warning">Cari hotel</Button>{' '}
                      </Col>
                    </Row>
                  </form>
                </TabPane>
              </TabContent>
            </Col>
        </Row>
      </div>
    );
  }
}