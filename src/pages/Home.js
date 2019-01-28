import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Navigasi from '../components/Navigasi/Navigasi';
import MainForm from '../components/Forms/MainForm';
// import Tanggalbeli from '../components/DaftarPembelian/Tanggalbeli';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Navigasi/>
                <MainForm/>
                <Footer/>
            </div>
        );
    }
}

export default Home;