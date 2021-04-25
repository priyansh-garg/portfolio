import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch, Redirect} from "react-router-dom";
import Homepage from '../src/pages/homepage/homepage.js';
import AboutMe from '../src/pages/aboutme/aboutme.js';
import Skills from '../src/pages/skills/skills.js';
class App extends React.Component {
  render(){
    return(<div>
            <BrowserRouter basename="/portfolio">
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path="/aboutme" component={AboutMe}/>
            <Route  path="/skills" component={Skills}/>
            </Switch>
            </BrowserRouter>
        </div>);
  }
}

export default App;
