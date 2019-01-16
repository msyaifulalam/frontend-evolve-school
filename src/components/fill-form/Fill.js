import React ,{ Component } from 'react';
import { Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Button } from 'reactstrap';


export default class Fill extends Component {
    constructor(props){
      super(props);
      this.state = {
          destination: '',
          room: '',
          checkin: '',
          duration: '',
          checkout: '',
          checkbox: '',
          search: ''
        }
    }

    changeHandler(e, name){
      this.setState({
        [name]: e.target.value
      })
    }

    render () {
        return (
          <div>
            <form>
              <p className="tagline-1">Hotel yang Terakhir Dilihat</p>
              <Row form>
                <Col md={8}>
                  <FormGroup>
                      <Label for="destination">Kota, tujuan, atau nama hotel</Label>
                      <InputGroup>
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                          <Input onChange={(e) => this.changeHandler(e, 'destination')} type="text" name="name" id="destination" placeholder="Yogyakarta, Provinsi Yogyakarta, Indonesia"></Input> 
                      </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                      <Label for="room">Tamu dan kamar</Label>
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                      <Input onChange={(e) => this.changeHandler(e, 'room')} type="text" name="" id="room" placeholder="2 Tamu, 1 Kamar"></Input> 
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
                            <Input onChange={(e) => this.changeHandler(e, 'checkin')} type="text" name="" id="chekin" placeholder="00:00"></Input> 
                        </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                          <Label for="duration">Durasi</Label>
                          <InputGroup>
                              <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                              <Input onChange={(e) => this.changeHandler(e, 'duration')} type="text" name="" id="duration" placeholder="time"></Input> 
                          </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                        <Label for="checkout">Check-Out:</Label>
                        <Label>{ this.state.checkin }</Label>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup check>
                      <Label check>
                          <input onChange={(e) => this.changeHandler(e, 'checkbox')} type="checkbox" />
                          Tampilkan akomodasi ramah keluarga
                      </Label> 
                    </FormGroup>
                  </Col>
                </Row>

              <Row form>
                <Col md={3}>
                  <p className="tagline-2" href="#">Bayar di Hotel</p>
                </Col>
                <Col md={5}>
                  <p className="tagline-2" href="#">Traveloka best price guarantee</p>
                </Col>
                <Col md={4}>
                  <Button color="warning">Cari hotel</Button>{' '}
                </Col>
              </Row>
            </form>
          </div>
        );
    }
}

