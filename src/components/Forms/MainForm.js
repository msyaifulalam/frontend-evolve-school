import React ,{ Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, TabContent, TabPane }
from 'reactstrap';
import './MainForm.css';
import classnames from 'classnames';
import HotelForm from './HotelForm/HotelForm';
import Flight from '../../asset/Forms-svg/Flight.svg';
import Hotel from '../../asset/Forms-svg/Hotel.svg';
import Train from '../../asset/Forms-svg/Train.svg';
import BusShutle from '../../asset/Forms-svg/BusShutle.svg';
import Airport from '../../asset/Forms-svg/Airport.svg';
import FlightHotel from '../../asset/Forms-svg/FlightHotel.svg';
import Attractions from '../../asset/Forms-svg/Attractions.svg';
import Topup from '../../asset/Forms-svg/Topup.svg';



export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="main-form container">
        <Row className="show-grid mt-5">
            <Col sm={6} md={3}>
                <ListGroup>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }} 
                      tag="a" href="#" action>
                    <img src={Flight}/>
                    <span className="ml-2">Flights</span>
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }} 
                      tag="a" href="#" action>
                    <img src={Hotel}/>
                    <span className="ml-2">Hotels</span>
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }} 
                      tag="a" href="#" action>
                    <img src={Train}/>
                    <span className="ml-2">Trains</span>
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }} 
                      tag="a" href="#" action>
                    <img src={BusShutle}/>
                    <span className="ml-2">Bus & Shutle</span>
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5'); }} 
                      tag="a" href="#" action>
                    <img src={Airport}/>
                    <span className="ml-2">Airport Transport</span>
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '6' })}
                    onClick={() => { this.toggle('6'); }} 
                      tag="a" href="#" action>
                    <img src={FlightHotel}/>
                    <span className="ml-2">Flight + Hotel</span>
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '7' })}
                    onClick={() => { this.toggle('7'); }} 
                      tag="a" href="#" action> 
                    <img src={Attractions}/>
                    <span className="ml-2">Attractions & Activities</span>
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '8' })}
                    onClick={() => { this.toggle('8'); }} 
                      tag="a" href="#" action>
                    <img src={Topup}/>
                    <span className="ml-2">Top-Up & Data Packages</span>
                  </ListGroupItem>
                </ListGroup>
            </Col>

            <Col sm={6} md={9}>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="2">
                    <HotelForm/>
                </TabPane>
              </TabContent>
            </Col>
        </Row> 
      </div>
    );
  }
}