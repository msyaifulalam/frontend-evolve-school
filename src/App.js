import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import store from './store';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import  Hoteldetail from './pages/Hoteldetail';
import Carousels from './pages/Carousels';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,  //or 'BrowserRouter as Router,'
  Route,
  Switch
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
         {/* <div> */}
            <Switch>
              <Route exact path="/" component = {() => <Home/>}></Route>
              <Route path="/profile" component = {(match) => <Profile router = {match}/>}></Route>
              <Route path="/hoteldetail" component = {(match) => <Hoteldetail router = {match}/>}></Route>
              <Route path="/carousels" component = {(match) => <Carousels router = {match}/>}></Route>
              <Route component = {() => <NotFound/>}></Route>
            </Switch>
          {/* </div> */}
        </BrowserRouter>
      //</Provider>
      );
    }
  }

export default App;
