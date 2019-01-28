import React, { Component } from 'react';
import '../../App.css';
import '../DaftarPembelian/Daftarbeli.css';
import {
    FormGroup,
    Label,
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
            <div class="bg">
                <Form>
                    <div class="marginleft">
                        <Row form>
                            <Col md={6}>
                                <div class="putih">
                                    <FormGroup>
                                        <Label for="exampleDate">
                                            <div class="textdari">Dari</div>
                                        </Label>
                                        <div class="ratakiri">
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend"><img src={Tanggal}/></InputGroupAddon>
                                                <Input 
                                                    type="date"
                                                    name="date"
                                                    id="exampleDate"
                                                    placeholder="Tue, Dec 18, 2018"
                                                    />
                                            </InputGroup>
                                        </div>
                                    </FormGroup>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="putih">
                                    <FormGroup>
                                        <Label for="exampleDate">
                                            <div class="textsampai">Sampai</div>
                                        </Label>
                                        <div class="ratakiri">
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend"><img src={Tanggal}/></InputGroupAddon>
                                                <Input
                                                    type="date"
                                                    name="date"
                                                    id="exampleDate"
                                                    placeholder="Wed, Jan 16, 2019"/>
                                            </InputGroup>
                                        </div>
                                    </FormGroup>
                                </div>
                            </Col>
                        </Row>
                        <div class="bulan">Januari 2019</div>
                    </div> 
                    <Col md={15}>
                        <ListGroup>
                            <ListGroupItem color="light">No. Pesanan 
                                <div class="pesanan1">411059742</div>
                                <div class="harga1">Rp 125.742</div>
                            </ListGroupItem>
                            <ListGroupItem color="dark"><img src={Bandara}/>
                                <div class="jarak">Ke Soekarno Hatta International Airport (CGK)</div>
                            </ListGroupItem>
                            <ListGroupItem color="light">
                                <div class="groupstatus">
                                    <div class="kotak"></div> 
                                    <div class="berhasil">Pembelian Berhasil
                                        <div class="detail1">
                                            <a href="">Lihat Detail  ...</a>
                                        </div>
                                    </div>
                                </div>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <div class="spasi">
                        <Col md={15}>
                            <ListGroup>
                                <ListGroupItem color="light">No. Pesanan 
                                    <div class="pesanan2">411018548</div>
                                    <div class="harga2">Rp 131.548</div> 
                                </ListGroupItem>
                                <ListGroupItem color="dark"><img src={Hotel}/>
                                    <div class="jarak">Airy Eco Syariah Bandara Soetta Perumahan Bandara Mas satu Tangerang</div>
                                </ListGroupItem>
                                <ListGroupItem color="light"> 
                                    <div class="groupstatus">
                                        <div class="kotak"></div> 
                                        <div class="berhasil">Pembelian Berhasil
                                            <div class="detail2">
                                                <a href="">Lihat Detail  ...</a>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </div>
                    <div class="spasi">
                        <Col md={15}>
                            <ListGroup> 
                                <ListGroupItem color="light">No. Pesanan 
                                    <div class="pesanan3">411012196</div>
                                    <div class="harga3">Rp 165.196</div>
                                </ListGroupItem>
                                <ListGroupItem color="dark"><img src={Tagihan}/>
                                    <div class="jarak">XL Axiata - XL Prioritas</div>
                                </ListGroupItem>
                                <ListGroupItem color="light">
                                    <div class="groupstatus">
                                        <div class="kotak"></div> 
                                        <div class="berhasil">Pembelian Berhasil
                                            <div class="detail3">
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