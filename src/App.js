import React from 'react'
import "./App.css"
import Navbar from './Components/Common/Navbar'
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
     <Navbar />
     <Switch>
          <Route path='/'exact component = {Home} />
          <Route path='/Policies'exact component = {Home} />
          <Route path='/Community'exact component = {Home} />
          <Route path='/home'exact component = {Home} />
          <Route path='/COntactUs'exact component = {Home} />
        </Switch>
    </Router>
    </>
  )
}

export default App