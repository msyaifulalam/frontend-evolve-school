import React, { Component } from 'react';
import '../PemesananHotel/PesanHotel.css';
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';
import Wifi from '../../asset/wifi.svg';

class PesanHotel extends Component {
    render() {
        return (
            <div className="pesanhotel">
                <Container>
                    <h2>Pemesanan Hotel</h2>
                    <br/>
                    <h3>Rincian harga</h3>
                    <div className="jarak_dg_kolom">
                        <Row>
                            <Col md={8}>
                                <div className="col1">
                                    <div className="jarak_dg_list">
                                        <ul>
                                            <li>
                                                <div className="namahotel">
                                                    Jakarta Airport Hotel Managed by Topotels
                                                </div>
                                            </li>
                                            <li>
                                                <div className="kategori">(1x) Delux King Bed (1 malam)
                                                    <div className="harga1">Rp 867.769</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="biayapajak">Biaya Pemulihan Pajak
                                                    <div className="harga2">Rp 182.231</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="travelokafee">Traveloka Fee
                                                    <div className="gratis">GRATIS</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="totalharga">
                                    <div className="total">Total
                                        <div className="jumlah">Rp 1.050.000</div>
                                    </div>
                                </div>
                                <div className="jarak_dg_ketentuan">
                                    <div className="group_pemesanan">
                                        <div className="ketentuan1">Dengan mengeklik tombol dibawah, Anda menyetujui
                                            <div className="ketentuan2">
                                                <a href ="">Syarat dan Ketentuan</a>serta
                                                <div className="jarak">
                                                    <a href ="">Kebijakan Privasi</a>dari Traveloka
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pemesanan">
                                            <Button color="warning">Lanjutkan pemesanan</Button>{' '}                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </Col>
                            <Col md={4}>
                                <div className="col2">
                                    <div className="line1">
                                        <div className="teks">Rincian pesanan</div>
                                    </div>
                                    <div className="border">
                                        <div className="line2">
                                            <div className="pict_hotel"></div>
                                            <div className="width">
                                                <div className="nama">Jakarta Airport Hotel Managed by Topotels</div>
                                            </div>
                                        </div>
                                        <div className="wifi">
                                            <img src={Wifi}/>                                       
                                            <div className="wifi_gratis">Wifi Gratis</div>
                                        </div>
                                        <div className="garis1">------------------------------------------</div>
                                        <div className="line3">
                                            <ul>
                                                <li>
                                                    <div className="durasi">Durasi
                                                        <div className="value1">1 Malam</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="in">Check-in
                                                        <div className="value2">Kam, 31 Jan 2019</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="out">Check-out
                                                        <div className="value3">Jum, 1 Feb 2019</div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="garis2"></div>
                                        </div>
                                        <div className="line4">
                                            <ul>
                                                <li>
                                                    <div className="tipe1">Tipe Kamar
                                                        <div className="tipe_kamar">Deluxe King Bed</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tipe2">Tipe Tempat Tidur
                                                        <div className="tipe_tempat_tidur">King Bed</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="kamar">Jumlah Kamar
                                                        <div className="jumlah_kamar">1 Kamar</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tamu">Tamu per Kamar
                                                        <div className="jumlah_tamu">2 Tamu</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div> 
                    <div className="end"></div>  
                </Container>
            </div>
        );
    }
}

export default PesanHotel;