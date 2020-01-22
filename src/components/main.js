import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Dashboard from './dashboard';
import Projects from './projects';
import Resume from './resume';
import Register from './register';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/register" component={Register} />
  </Switch>
)

export default Main;
