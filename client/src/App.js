import React, { Component } from 'react';

// BrowserRouter is a <Router> that uses the HTML5 history API 
// (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
// From: https://reacttraining.com/react-router/web/api/BrowserRouter
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './auth/Register'
import Login from './auth/Login'


class App extends Component {
  render() {
    return(
      <Router>
        <div className='App'>
          <Navbar/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </div>
      </Router>
    )
  }
}

export default App;
