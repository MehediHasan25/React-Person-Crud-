import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Person from './Components/Person';
import Nav from './Components/layout/Nav';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Search from './Components/Search';
import Test_search from './Components/Test_search';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Nav/>
      <div className= "container">
      <Switch>
           <Route exact path="/" component={Person}/>
           <Route exact path="/add" component={Create}/>]
           <Route exact path="/update/:id" component={Edit}/>
           <Route exact path="/search" component={Search}/>
           <Route exact path="/test" component={Test_search}/>
           </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
