import React, { Component } from 'react';
import '../../App.css';
import '../DaftarPembelian/Daftarbeli.css';
import {
    FormGroup,
    Input,
    Form,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import Tanggal from '../../asset/tanggal.svg';
import Bandara from '../../asset/bandara.svg';
import Hotel from '../../asset/hotel.svg';
import Tagihan from '../../asset/tagihan.svg';

class Tanggalbeli extends Component {
    render() {
        return (
            <div className="bg">
                <Form>
                    <div className="marginleft">
                        <Row form>
                            <Col md={6}>
                                <div className="putih">
                                    <FormGroup>
                                        <div className="ratakiri">
                                            <InputGroup>
                                                <div className="grouptgl">
                                                    <div className="logotgl">
                                                        <InputGroupAddon addonType="prepend"><img src={Tanggal} alt="tanggal"/>
                                                            <div className="textdari">Dari
                                                                <div className="tgl">
                                                                <Input 
                                                                    type="date"
                                                                    name="date"
                                                                    id="exampleDate"
                                                                    placeholder="Tue, Dec 18, 2018"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </InputGroupAddon>
                                                    </div>
                                                </div>
                                            </InputGroup>
                                        </div>
                                    </FormGroup>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="putih">
                                    <FormGroup>
                                        <div className="ratakiri">
                                            <InputGroup>
                                                <div className="grouptgl">
                                                    <div className="logotgl">
                                                        <InputGroupAddon addonType="prepend"><img src={Tanggal} alt="tanggal"/>
                                                            <div className="textsampai">Sampai
                                                                <div className="tgl">
                                                                <Input
                                                                    type="date"
                                                                    name="date"
                                                                    id="exampleDate"
                                                                    placeholder="Wed, Jan 16, 2019"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </InputGroupAddon>
                                                    </div>
                                                </div>
                                            </InputGroup>
                                        </div>
                                    </FormGroup>
                                </div>
                            </Col>
                        </Row>
                        <div className="bulan">Januari 2019</div>
                    </div> 
                    <Col md={15}>
                        <ListGroup>
                            <ListGroupItem color="light">No. Pesanan 
                                <div className="pesanan1">411059742</div>
                                <div className="harga1">Rp 125.742</div>
                            </ListGroupItem>
                            <ListGroupItem color="dark"><img src={Bandara} alt="icon-bandara"/>
                                <div className="jarak">Ke Soekarno Hatta International Airport (CGK)</div>
                            </ListGroupItem>
                            <ListGroupItem color="light">
                                <div className="groupstatus">
                                    <div className="kotak"></div> 
                                    <div className="berhasil">Pembelian Berhasil
                                        <div className="detail1">
                                            <a href="">Lihat Detail  ...</a>
                                        </div>
                                    </div>
                                </div>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <div className="spasi">
                        <Col md={15}>
                            <ListGroup>
                                <ListGroupItem color="light">No. Pesanan 
                                    <div className="pesanan2">411018548</div>
                                    <div className="harga2">Rp 131.548</div> 
                                </ListGroupItem>
                                <ListGroupItem color="dark"><img src={Hotel} alt="icon-hotel"/>
                                    <div className="jarak">Airy Eco Syariah Bandara Soetta Perumahan Bandara Mas satu Tangerang</div>
                                </ListGroupItem>
                                <ListGroupItem color="light"> 
                                    <div className="groupstatus">
                                        <div className="kotak"></div> 
                                        <div className="berhasil">Pembelian Berhasil
                                            <div className="detail2">
                                                <a href="">Lihat Detail  ...</a>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </div>
                    <div className="spasi">
                        <Col md={15}>
                            <ListGroup> 
                                <ListGroupItem color="light">No. Pesanan 
                                    <div className="pesanan3">411012196</div>
                                    <div className="harga3">Rp 165.196</div>
                                </ListGroupItem>
                                <ListGroupItem color="dark"><img src={Tagihan} alt="icon-tagihan"/>
                                    <div className="jarak">XL Axiata - XL Prioritas</div>
                                </ListGroupItem>
                                <ListGroupItem color="light">
                                    <div className="groupstatus">
                                        <div className="kotak"></div> 
                                        <div className="berhasil">Pembelian Berhasil
                                            <div className="detail3">
                                                <a href="">Lihat Detail  ...</a>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Tanggalbeli;