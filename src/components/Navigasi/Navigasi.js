import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import burger from '../assets/burger.svg';
import pesawat from '../assets/pesawat.svg';
import bus from '../assets/bus.svg';
import kereta from '../assets/kereta.svg';
import hotel from '../assets/hotel.svg';
import pesawathotel from '../assets/pesawathotel.svg';
import rekreasi from '../assets/rekreasi.svg';
import tagihan from '../assets/tagihan.svg';
import bandara from '../assets/bandara.svg';
import './Navigasi.css';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Container,
   } from 'reactstrap';

  import axios from 'axios';

export class Navigasi extends Component {
  constructor(props){
    super(props);
    this.state = {
        features:[],
       
    }
  }
  
  componentDidMount(){
    axios.get('http://demo2118348.mockable.io/features')
    .then(response => {
        console.log(response);
        this.setState({
            features: response.data.data
        })
    }).catch(err => {
        console.log(err);
    });
  }
  
  render() {
    return (
      <div>
        
          <Navbar id="navigasi" expand="md">
            <Container>
              <NavbarBrand href="/"><img src={burger} /> &nbsp; <img src={logo} /></NavbarBrand>
              <NavbarToggler  />
              <Collapse  navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button className='navigasi' outline color='danger'>Login</Button>             
                    <Button className='navigasi' outline color='primary'>Daftar</Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Navbar color="light">
            <Container>
              <Nav>
              { this.state.features.map((feature) =>
               <NavItem key={feature.id}>
               <div className="logo" dangerouslySetInnerHTML={{__html:feature.icon}}></div>
               &nbsp; <a href={feature.path}>{feature.features_name}</a>
               </NavItem>) 
              }
              
              </Nav>
            </Container>
          </Navbar>
        
          
        

        
      </div>
    )
  }
}

export default Navigasi
