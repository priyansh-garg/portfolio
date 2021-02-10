import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch, Redirect} from "react-router-dom";
import Homepage from '../src/pages/homepage/homepage.js';
import AboutMe from '../src/pages/aboutme/aboutme.js';
class App extends React.Component {
  render(){
    return(<div>
            <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path="/aboutme" component={AboutMe}/>
            </Switch>
            </BrowserRouter>
        </div>);
  }
}

export default App;
