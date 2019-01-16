import React ,{ Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, TabContent, TabPane }
from 'reactstrap';
import '../main-form/Forms.css';
import classnames from 'classnames';
import Fill from '../fill-form/Fill.js';



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
      <div className="container">
        <Row className="show-grid mt-5">
            <Col sm={6} md={3}>
                <ListGroup>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }} 
                      tag="a" href="#" action>
                    Flights
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }} 
                      tag="a" href="#" action>
                    Hotels
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }} 
                      tag="a" href="#" action>
                      Trains
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }} 
                      tag="a" href="#" action>
                      Bus & Shuttle
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5'); }} 
                      tag="a" href="#" action>
                      Airport Transport
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '6' })}
                    onClick={() => { this.toggle('6'); }} 
                      tag="a" href="#" action>
                      Flight + Hotel
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '7' })}
                    onClick={() => { this.toggle('7'); }} 
                      tag="a" href="#" action> 
                      Attractions & Activities
                  </ListGroupItem>
                  <ListGroupItem 
                    className={classnames({ active: this.state.activeTab === '8' })}
                    onClick={() => { this.toggle('8'); }} 
                      tag="a" href="#" action>
                      Top-Up & Data Packages
                  </ListGroupItem>
                </ListGroup>
            </Col>

            <Col sm={6} md={9}>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="2">
                    <Fill/>
                </TabPane>
              </TabContent>
            </Col>
        </Row>
      </div>
    );
  }
}