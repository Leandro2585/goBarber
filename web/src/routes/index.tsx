import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import ResetPassword from '../pages/ResetPassword';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
    <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/forgot-password" component={ForgotPassword}/>
      <Route path="/reset-password" component={ResetPassword}/>

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
);

export default Routes;
