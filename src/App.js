import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dash/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/project/CreateProject';

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
       <Navbar/>
       <Switch> 
         <Route exact path='/' component={Dashboard} />
         <Route path='/project/:id' component={ProjectDetails} />
         <Route path='/signin' component={Signin} />
         <Route path='/signup' component={Signup} /> 
         <Route path='/create' component={CreateProject} />
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
