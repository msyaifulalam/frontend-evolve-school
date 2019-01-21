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
    NavLink,
    Button,
    Container,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

  import './Navigasi.css';

export class Navigasi extends Component {
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
                    <Button color='secondary'>Login</Button>             
                    <Button color='primary'>Daftar</Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Navbar color="light">
            <Container>
              <Nav>
                <NavItem><img src={pesawat} />&nbsp;Tiket Pesawat</NavItem>
                <NavItem><img src={hotel} />&nbsp;Hotel</NavItem>
                <NavItem><img src={kereta} />&nbsp;Tiket Kereta Api</NavItem>
                <NavItem><img src={bus} />&nbsp;Tiket Bus &amp; Travel</NavItem>
                <NavItem><img src={bandara} />&nbsp;Transportasi Bandara</NavItem>
                <NavItem><img src={pesawathotel} />&nbsp;Pesawat + hotel</NavItem>
                <NavItem><img src={rekreasi} />&nbsp;Aktivitas &amp; rekreasi</NavItem>
                <NavItem><img src={tagihan} />&nbsp;Tagihan &amp; Isi Ulang</NavItem>
              </Nav>
            </Container>
          </Navbar>
        
          
        

        
      </div>
    )
  }
}

export default Navigasi
