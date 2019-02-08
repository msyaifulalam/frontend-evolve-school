import React, { Component } from 'react';
import './DetailPembayaran.css';
import { Container, Row, Col } from 'reactstrap';

class DetailPembayaran extends Component {

    render() {
        return(
            <Container>
                <div className='title'>Petunjuk Pembayaran Transfer</div>
                <Row>
                    <Col xs="8">
                        <div className='howto_container'>
                            <div className='notif'>
                                <sapn>Instruksi pembayaran telah dikirim ke email anda</sapn>
                            </div>
                            <div className='step_title'>
                                <div className='step_text'>Selesaikan Pembayaran Sebelum</div>
                            </div>
                            <div className='textBox'>
                                <h4>Hari ini 21.38 PM</h4>
                                <span>Selesaikan pembayaran dalam 30 menit 3 detik</span>
                            </div>
                            <div className='step_title'>
                                <div className='step_text'>Mohon Transfer Ke:</div>
                            </div>
                            <div className='textBox'>
                                <span>Mohon pilih Online Transfer sebagai tipe transfer Anda</span>
                            </div>
                            <div className='textBox'>
                                <h4>Bank Mandiri</h4>
                                <div className='trf_detail'>
                                    <div className='ket'>Nomor Rekening:</div>
                                    <div className='detail'>165 00 66 77 0000</div>
                                </div>
                                <div className='trf_detail'>
                                    <div className='ket'>Nama Penerima:</div>
                                    <div className='detail'>PT. Trinusa Travelindo <br/> Grand Slipi Tower</div>
                                </div>
                            </div>
                            <div className='textBox'>
                                <div className='pay_detail'>
                                    <div className='ket'>Jumlah Transfer:</div>
                                    <div className='detail'>Rp. 1.049.702</div>
                                </div>
                            </div>
                            <div className='step_title'>
                                <div className='step_text'>Anda Sudah Menbayar?</div>
                            </div>
                            <div className='textBox'>
                                <p>Setelah pembayaran A nda dikonfirmasi, kami akan mengirim voucher hotel ke alamat email Anda.</p>
                                <button className='ssb'>Saya Sudah Bayar</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className='order_container'>
                            <div className='order_textBox'>
                                <div className='order_textBox_title'>NO. PESANAN</div>
                                <div className='order_textBox_text'>417540702</div>
                            </div>
                            <div className='order_textBox'>
                                <div className='order_textBox_title'>RINCIAN PESANAN</div>
                                <div className='location_detail'>
                                    <div className='order_textBox_text'>Jakarta Airport Hotel Managed by Topotels</div>
                                </div>
                                <div>
                                    <ul className='detail_list'>
                                        <li>Kamis, 31 Januari 2019</li>
                                        <li>1 Malam</li>
                                        <li>Deluxe King Bed</li>
                                        <li>1 Kamar</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='order_textBox'>
                                <div className='order_textBox_title'>TAMU</div>
                                <dav className='guest_name'>Tamu 1</dav>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DetailPembayaran;