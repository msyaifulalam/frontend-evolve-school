import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Navigasi from '../components/Navigasi/Navigasi';
import DetailPembayaran from '../components/Pembayaran/DetailPembayaran';
// import Tanggalbeli from '../components/DaftarPembelian/Tanggalbeli';

class Pembayaran extends Component {
    render() {
        return (
            <div className="App">
                <Navigasi/>
                <DetailPembayaran/>
                <Footer/>
            </div>
        );
    }
}

export default Pembayaran;