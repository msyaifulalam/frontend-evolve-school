import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import Navigasi from '../components/Navigasi/Navigasi';
import './Account.css';
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
  render() {
    return (
      <div>
        <Navigasi/>
        <Container>
            <Row>
                <Col>
                <h4>Hasil pencarian hotel di Jakarta, Indonesia</h4>
                <p>16 Jan 2019 - 17 Jan 2019</p>
                </Col>
                <Col><Button color="primary" className='search'>Ganti Pencarian</Button></Col>
            </Row><hr/>
            <Row>
                <Col xs="4">
                  <Card>
                    <CardTitle>Urutkan Hasil Pencarian</CardTitle>
                    <CardText>Urutkan hasil pencarian Anda berdasarkan:</CardText>
                    <hr/>
                    <FormGroup tag="fieldset">
                      <FormGroup check className='ulasan'>
                        <Label check className='search'>
                          <Input type="radio" name="radio1" className='search'/>{' '}
                          Harga tertinggi
                        </Label>
                        <Label check className='search'>
                          <Input type="radio" name="radio2" className='search'/>{' '}
                          Harga terendah
                        </Label> 
                      </FormGroup>
                      <FormGroup check >
                        <Label check className='search'>
                          <Input type="radio" name="radio3" className='search'/>{' '}
                          Nilai Ulasan
                        </Label>
                        <Label check className='search'>
                          <Input type="radio" name="radio4" className='search'/>{' '}
                          Popularitas Tertinggi
                        </Label> 
                      </FormGroup>
                    </FormGroup>
                  </Card>

                  <Card className='search'>
                      <CardTitle>Filter Hasil Pencarian<Button color="link">Reset Filter</Button></CardTitle>
                      <CardText>Menampilkan hasil berdasarkan kategori</CardText>
                      <hr/>
                      <CardTitle>Kisaran harga per malam</CardTitle>
                      <FormGroup>
                          <Input type="text" name="text" id="min" placeholder="Rp 0" className='price'/>
                          <hr/>
                          <Input type="text" name="text" id="max" placeholder="Rp 15,000,000" className='price'/>
                      </FormGroup>
                      <hr/>
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
                  <Card id="result">
                    <Col xs="3">
                      <CardImg top width="132px" height="176px" src="https://via.placeholder.com/150" alt="Card image cap" />
                    </Col>
                    <Col xs="6">
                      
                        <CardTitle>The Edelweiss Hotel Yogyakarta</CardTitle>
                        <Button outline color="info">Hotel</Button>{' '}
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/><br/>
                        <CardText><img src={lokasi} alt="lokasi"/>&nbsp; Depok, Yogyakarta</CardText>
                        
                    </Col>
                    <Col xs="3">
                    <h4>Rp 328.000</h4>
                    </Col>
                  </Card>
                  <Card id="result">
                    <Col xs="3">
                      <CardImg top width="132px" height="176px" src="https://via.placeholder.com/150" alt="Card image cap" />
                    </Col>
                    <Col xs="6">
                      
                        <CardTitle>Hotel New Saphir</CardTitle>
                        <Button outline color="info">Hotel</Button>{' '}
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/><br/>
                        <CardText><img src={lokasi} alt="lokasi"/>&nbsp; Depok, Yogyakarta</CardText>
                        
                    </Col>
                    <Col xs="3" border-left="1px">
                    <h4>Rp 554.000</h4>
                    </Col>
                  </Card>
                  <Card id="result">
                    <Col xs="3">
                      <CardImg top width="132px" height="176px" src="https://via.placeholder.com/150" alt="Card image cap" />
                    </Col>
                    <Col xs="6">
                      
                        <CardTitle>Horison Grand Keisha Yogyakarta</CardTitle>
                        <Button outline color="info">Hotel</Button>{' '}
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/>
                        <img src={rate} alt="rate"/><br/>
                        <CardText><img src={lokasi} alt="lokasi"/>&nbsp; Depok, Yogyakarta</CardText>
                        
                    </Col>
                    <Col xs="3">
                    <h4>Rp 697.000</h4>
                    </Col>
                  </Card>
                </Col>
              
               
                </Row>
        </Container>
        <Footer/>
      </div>
      
    )
  }
}

export default Pencarian
