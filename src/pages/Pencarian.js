import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import Navigasi from '../components/Navigasi/Navigasi';
import './Pencarian.css';
import axios from 'axios';
import {
    Container,
    Button,
    Row,
    Col,
    Card,CardTitle,CardText,CardImg,
    Input,Label,FormGroup
  } from 'reactstrap';
import rate from '../components/assets/rate.svg';
import lokasi from '../components/assets/lokasi.svg';

export class Pencarian extends Component {
    constructor(props){
      super(props);
      this.state = {
          hotel_data: [],
      };
  }

  componentDidMount(){
    axios.get('https://backend-evolve.herokuapp.com/booking/hotel/search/?address=bundaran&check_in=2019-01-17&check_out=2019-01-18&status=Tersedia')
    .then(response => {
        console.log(response);
        this.setState({
            hotel_data: response.data.data
        })
    }).catch(err => {
        console.log(err);
    });
  }

  renderRating(stars){
    let rating = [];
    for (let i = 0; i < stars; i++) {
        rating.push(<svg fill="#ffc412" stroke="none" viewBox="0 0 15 12" className="_1Akal tvat-starIcon" height="24" strokeLinecap="round" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-0.133333,-1)"><path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path></g>
        </svg>);
    }
    return rating;
  }

  render() {
    return (
      console.log(this.state.hotel_data),
      <div>
        <Navigasi/>
        <Container>
          <div className="search">
              <Row className="title-search">
                  <Col>
                  <h4>Hasil pencarian hotel di Jakarta, Indonesia</h4>
                  <p className="date-title-search">16 Jan 2019 - 17 Jan 2019</p>
                  </Col>
                  <Col><Button color="primary" className="btn-search">Ganti Pencarian</Button></Col>
              </Row><hr/>
              <Row>
                  <Col xs="4" id="col-search">
                    <Card className="card-searchBy">
                      <CardTitle>Urutkan Hasil Pencarian</CardTitle>
                      <CardText>Urutkan hasil pencarian Anda berdasarkan:</CardText>
                      <hr/>
                      <FormGroup tag="fieldset">
                        <FormGroup check className="form-check-searchBy">
                          <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Harga tertinggi
                          </Label>
                          <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Harga terendah
                          </Label> 
                        </FormGroup>
                        <FormGroup check >
                          <Label check>
                            <Input type="radio" name="radio3"/>{' '}
                            Nilai Ulasan
                          </Label>
                          <Label check >
                            <Input type="radio" name="radio4" />{' '}
                            Popularitas Tertinggi
                          </Label> 
                        </FormGroup>
                      </FormGroup>
                    </Card>
      
                    <Card className="card-searchByPrice">
                        <CardTitle>Filter Hasil Pencarian<Button color="link">Reset Filter</Button></CardTitle>
                        <CardText>Menampilkan hasil berdasarkan kategori</CardText>
                        <hr/>
                        <CardTitle>Kisaran harga per malam</CardTitle>
                        <FormGroup className="searchByPrice">
                            <Input className="input-price" type="text" name="text" id="min" placeholder="Rp 0"/>
                            <hr/>
                            <Input className="input-price" type="text" name="text" id="max" placeholder="Rp 15,000,000" />
                        </FormGroup>
                        <hr className="hr-price"/>
                        <CardTitle>Bintang</CardTitle>
                        <FormGroup tag="fieldset">
                          <FormGroup check className='search'>
                            <Label check>
                              <Input type="checkbox" name="rate1" className='rate'/>{' '}
                              <img src={rate} alt="rate"/>
                            </Label>
                          </FormGroup>
                          <FormGroup check className='search'>
                            <Label check>
                              <Input type="checkbox" name="rate2" className='rate'/>{' '}
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                            </Label>
                          </FormGroup>
                          <FormGroup check className='search'>
                            <Label check>
                              <Input type="checkbox" name="rate3" className='rate'/>{' '}
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                            </Label>
                          </FormGroup>
                          <FormGroup check className='search'>
                            <Label check>
                              <Input type="checkbox" name="rate4" className='rate'/>{' '}
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                            </Label>
                          </FormGroup>
                          <FormGroup check className='search'>
                            <Label check>
                              <Input type="checkbox" name="rate5" className='rate'/>{' '}
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                              <img src={rate} alt="rate"/>
                            </Label>
                          </FormGroup>
                        </FormGroup>
                    </Card>
                  </Col>
            
                  <Col xs="8">
                  {this.state.hotel_data.map(hotel =>
                    <Card className="search-list">
                      <Col xs="3">
                        <CardImg className="card-image-search-list" top src="https://via.placeholder.com/150" alt="Card image cap" />
                      </Col>
                      <Col xs="6">
                          <CardTitle>{hotel.name}</CardTitle>
                          <Button outline color="info">{hotel.type}</Button>{' '}
                          {this.renderRating(this.stars = hotel.rating)}
                          <br/>
                          <CardText><img src={lokasi} alt="lokasi"/>&nbsp; {hotel.address}, {hotel.city}</CardText>
                          
                      </Col>
                      <Col xs="3">
                      <h4>Rp {hotel.rooms[0].price}</h4>
                      </Col>
                    </Card>
                    )}
                  </Col>
                  </Row>
               </div>
        </Container>
        <Footer/>
      </div>
      
    )
  }
}

export default Pencarian
