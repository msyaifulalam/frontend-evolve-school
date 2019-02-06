import React ,{ Component } from 'react';
import { Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon, Table } from 'reactstrap';
import { Button } from 'reactstrap';
import LastView from '../../../asset/Forms-svg/LastView.svg';
import Location from '../../../asset/Forms-svg/Location.svg';
import Payment from '../../../asset/Forms-svg/Payment.svg';
import BestPrice from '../../../asset/Forms-svg/BestPrice.svg';
import Search from '../../../asset/Forms-svg/Search.svg';


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
              <div class="tagline-1">
                <img src={LastView}/>
                <span className="ml-2">Hotel yang Terakhir Dilihat</span>
              </div>
                <div class="fill">
                  <div class="fill-row">
                    <div class="first-row">
                      <Row form>
                      <Col md={8}>
                        <FormGroup>
                            <Label for="destination">Kota, tujuan, atau nama hotel</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><img src=  {Location} /></InputGroupAddon> 
                                <Input onChange={(e) => this.changeHandler(e, 'destination')} type="text" name="name" id="destination" placeholder="Yogyakarta, Provinsi Yogyakarta, Indonesia"></Input> 
                            </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                            <Label for="room">Tamu dan kamar</Label>
                            <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                            <Input onChange={(e) => this.changeHandler(e, 'room')} type="select" name="select" id="room" placeholder="2 Tamu, 1 Kamar">
                              <option>1</option>
                              <option>2</option>
                            </Input> 
                            </InputGroup> 
                        </FormGroup>
                      </Col>
                    </Row>
                    </div>

                    <div class="second-row">
                      <Row form>
                        <Col md={3}>
                          <FormGroup>
                              <Label for="checkin">Check-in</Label>
                              <InputGroup>
                                  <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                                    <Input onChange={(e) => this.changeHandler(e, 'checkin')}
                                      type="date"
                                      name="date"
                                      id="checkin"
                                      placeholder=""
                                    />
                              </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                                <Label for="duration">Durasi</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">@</InputGroupAddon> 
                                    <Input onChange={(e) => this.changeHandler(e, 'duration')} type="select" name="select" id="duration" placeholder="time">
                                      <option>1 night</option>
                                      <option>2 night</option>
                                      <option>3 night</option>
                                      <option>4 night</option>
                                      <option>5 night</option>
                                      <option>6 night</option>
                                      <option>7 night</option>
                                      <option>8 night</option>
                                      <option>9 night</option>
                                      <option>10 night</option>
                                      <option>11 night</option>
                                      <option>12 night</option>
                                      <option>13 night</option>
                                      <option>14 night</option>
                                      <option>15 night</option>
                                    </Input> 
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
                                <input onChange={(e) => this.changeHandler(e, 'checkbox')} type="checkbox" size="lg" />
                                Tampilkan akomodasi ramah keluarga
                            </Label> 
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>

                    <div class="third-row mt-2">
                      <Row form>
                        <Col md={3} >
                          <img src={Payment}/>
                          <span className="ml-2 tagline-2">Bayar di Hotel</span>
                        </Col>
                        <Col md={5}>
                          <img src={BestPrice}/>
                          <span className="ml-2 tagline-2">Traveloka best price guarantee</span>
                        </Col>
                        <Col md={4}>
                          <Button color="warning" className="search-hotel"><img className="mr-2" src={Search}/>Cari hotel</Button>{''}
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
            </form>
          </div>
        );
    }
}

