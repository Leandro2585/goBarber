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
      <Route path="/login" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/forgot-password" component={ForgotPassword}/>
      <Route path="/reset-password" component={ResetPassword}/>

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
);

export default Routes;
