import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import store from './store';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {
  BrowserRouter,  //or 'BrowserRouter as Router,'
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
         {/* <div> */}
            <Switch>
              <Route exact path="/" component = {() => <Home/>}></Route>
              <Route component = {() => <NotFound/>}></Route>
            </Switch>
          {/* </div> */}
        </BrowserRouter>
      //</Provider>
      );
    }
  }

export default App;
