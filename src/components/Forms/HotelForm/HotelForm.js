import React ,{ Component } from 'react';
import { Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Button } from 'reactstrap';
import LastView from '../../../asset/Forms-svg/LastView.svg';
import Location from '../../../asset/Forms-svg/Location.svg';
import Payment from '../../../asset/Forms-svg/Payment.svg';
import BestPrice from '../../../asset/Forms-svg/BestPrice.svg';
import Search from '../../../asset/Forms-svg/Search.svg';
import moment from 'moment';



export default class Fill extends Component {
    constructor(props){
      super(props);
      this.state = {
          destination: '',
          room: '',
          checkin: '',
          duration: 1,
          checkout: '',
          checkbox: '',
          search: ''
        }
    }

 

    changeHandler(e, name){
      this.setState({
        [name]: e.target.value
      }, function(){
        if (name === 'checkin' || name === 'duration') {
       
          const checkin = moment(this.state.checkin, 'YYYY-MM-DD').zone('+07:00');
          const duration = this.state.duration;
          const checkout = checkin.add(duration, 'days');

          this.setState({
            checkout : checkout.format('DD-MM-YYYY')
          })
        }
      })
    }

    // componentDidMount(){
    //   axios.get('http://localhost:1337/booking/hotel/search/?address&check_in&check_out&status')
    //   .then(response => {
    //       console.log(response);
    //       this.setState({
    //           address: response.data.address,
    //           check_in: response.data.check_in,
    //           check_out: response.data.check_in,
    //       })
    //   }).catch(err => {
    //       console.log(err);
    //   });
    // }

    render () {
        return (
          <div className="hotel-form">
            <form>
              <div className="tagline-1">
                <img alt="lastview" src={LastView}/>
                <span className="ml-2">Hotel yang Terakhir Dilihat</span>
              </div>
              <div className="fill">
                <div className="fill-row">
                  <div className="first-row">
                    <Row form>
                      <Col md={8}>
                        <FormGroup>
                            <Label for="destination">Kota, tujuan, atau nama hotel</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><img alt="destination" src=  {Location} /></InputGroupAddon> 
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

                  <div className="second-row">
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
                                    
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </Input> 
                              </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md={2}>
                        <FormGroup>
                            <Label for="checkout">Check-Out:</Label>
                            <Label>{ this.state.checkout }</Label>
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

                  <div className="third-row mt-2">
                    <Row form>
                      <Col md={3} >
                        <img alt="payment" src={Payment}/>
                        <span className="ml-2 tagline-2">Bayar di Hotel</span>
                      </Col>
                      <Col md={5}>
                        <img alt="bestprice" src={BestPrice}/>
                        <span className="ml-2 tagline-2">Traveloka best price guarantee</span>
                      </Col>
                      <Col md={4}>
                        <Button color="warning" className="search-hotel"><img alt="search" className="mr-2" src={Search}/>Cari hotel</Button>{''}
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

