import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route } from 'react-router-dom';
import NotMatch from './components/NotMatch/NotMatch';



function App() {

  

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
        </Switch>
      </Router>


        
    </div>
   
  );
}

export default App;
