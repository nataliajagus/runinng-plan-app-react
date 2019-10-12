import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle.js';
import Exercise from 'views/Exercise';
import Weeks from 'views/Weeks';


const Root = () => (
  <>
  
  <GlobalStyle />
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={Weeks} />
      <Route path="/exercise" component={Exercise} />
    </Switch>
  </HashRouter>
  </>
  
)


export default Root;
