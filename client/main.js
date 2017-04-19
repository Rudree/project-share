import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Session } from 'meteor/session';

import Home from '../imports/ui/HomePage.jsx';
import Login from '../imports/ui/LoginPage.jsx';
import Register from '../imports/ui/RegistrationPage.jsx';
import ItemPage from '../imports/ui/UploadAnItem.jsx';
import ItemManagementPage from '../imports/manage/ItemAPI.jsx';
import HeadnavBar from '../imports/ui/HeadNavBar.jsx';
import CheckEmailPage from '../imports/ui/CheckEmailPage.jsx';
import VerifiedPage from '../imports/ui/VerifiedPage.jsx'

export const App = ({ children }) => (
  <div>
    <HeadnavBar />
    {children}
  </div>
);

Meteor.startup(() => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="uploaditem" component={ItemPage} />
        <Route path="manageitem" component={ItemManagementPage} />
        <Route path="verify-email/:token" onEnter={VerifyEmail} component={Home} />
        <Route path="check-email" component={CheckEmailPage} />
      </Route>
    </Router>
    , document.getElementById('render-home')
  );
});

export function VerifyEmail(nextState, replace) {
  if(!Accounts.verifyEmail(nextState.params.token)) {
    replace({
        pathname: "/verified",
        state: { nextPathname: nextState.location.pathname }
    });
  }
}


