import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Navigasi from '../components/Navigasi/Navigasi';
import MainForm from '../components/Forms/MainForm';
import PesanHotel from '../components/PemesananHotel/PesanHotel'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Navigasi/>
                <MainForm/>
                <Footer/>
                {/* <PesanHotel/> */}
            </div>
        );
    }
}

export default Home;