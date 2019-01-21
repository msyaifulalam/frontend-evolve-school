import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Tanggalbeli from '../components/DaftarPembelian/Tanggalbeli';

class Home extends Component {
    render() {
        return (
            <div className="App">
                {/* <Tanggalbeli/> */}
                <Footer/>
            </div>
        );
    }
}

export default Home;