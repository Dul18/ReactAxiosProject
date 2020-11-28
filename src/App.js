import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import HooksAsync from './components/HooksAsync';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Home from './pages/Home';
import About  from './pages/About';
import User from './pages/User';
import Fetch from './components/Fetch'

//import axios from 'axios';
import UseMe from './components/UseMe';

function App() {

return(

  <Router>
    <div className="App">
      <header className="App-header">
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>

            <li>
              <Link to={
                {

                  pathname: "/about",
                  state:{

                    from:"root"
                  }

                }

              }
               >About</Link>
            </li>

            <li>
              <Link to="/user/dul/san" >User</Link>
            </li>
          </ul>

          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:firstName/:lastName" component={User}/>

             
            </Switch>
          </div>

      </header>

    </div>

            </Router>


  
)

}

export default App;


 


