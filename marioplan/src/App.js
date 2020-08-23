import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard' 
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Dashboard} />
          <Route path = '/projectdetails/:id' component = {ProjectDetails} />
          <Route path = '/signin' component = {SignIn} />
          <Route path = '/signup' component = {SignUp} />
          <Route path = '/createproject' component = {CreateProject} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
