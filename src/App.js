import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Account from './pages/Account';
import  Hoteldetail from './pages/Hoteldetail';
import HotelRoom from './pages/HotelRoom/HotelRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,  //or 'BrowserRouter as Router,'
  Route,
  Switch
} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
         {/* <div> */}
            <Switch>
              <Route exact path="/" component = {() => <Home/>}></Route>
              <Route path="/profile" component = {(match) => <Account router = {match}/>}></Route>
              <Route path="/hoteldetail" component = {(match) => <Hoteldetail router = {match}/>}></Route>
              <Route path="/hotelroom" component = {(match) => <HotelRoom router = {match}/>}></Route>
              <Route component = {() => <NotFound/>}></Route>
            </Switch>
          {/* </div> */}
        </BrowserRouter>
      </Provider>
      );
    }
  }

export default App;
