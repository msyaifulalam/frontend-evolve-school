import React, { Component } from 'react';
import '../App.css';
// import '../components/Footer/Footer.css';
import Footer from '../components/Footer/Footer';
import Navigasi from '../components/Navigasi/Navigasi';
import Forms from '../components/main-form/Forms';
// import Tanggalbeli from '../components/DaftarPembelian/Tanggalbeli';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Navigasi/>
                <Forms/>
                <Footer/>
            </div>
        );
    }
}

export default Home;