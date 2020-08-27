import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign-in" component={SignIn}/>
      <Route path="/sign-up" component={SignUp}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
