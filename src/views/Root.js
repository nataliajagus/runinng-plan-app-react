import React from 'react';
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle.js';
import Exercise from 'views/Exercise';
import Weeks from 'views/Weeks';


const Root = () => (
  <>
  
  <GlobalStyle />
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Weeks} />
      <Route path="/exercise" component={Exercise} />
    </Switch>
  </BrowserRouter>
  </>
  
)


export default Root;
