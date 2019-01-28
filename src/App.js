import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import store from './store';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Navigasi from './components/Navigasi/Navigasi';
import Pencarian from './pages/Pencarian';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,  //or 'BrowserRouter as Router,'
  Route,
  Switch
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import './components/Navigasi/Navigasi.css';



class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
         {/* <div> */}
            <Switch>
              <Route exact path="/" component = {() => <Home/>}></Route>
              <Route path="/profile" component = {(match) => <Profile router = {match}/>}></Route>
              <Route path="/pencarian" component = {(match) => <Pencarian router = {match}/>}></Route>
              <Route component = {() => <NotFound/>}></Route>
            </Switch>
          {/* </div> */}
        </BrowserRouter>
      //</Provider>
      );
    }
  }

export default App;

