import React, { Component, PropTypes, Props } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Icon, Menu, Segment, Dropdown } from 'semantic-ui-react';
import { Session } from 'meteor/session';

class HeadNavBar extends React.Component {

  constructor() {
    super();
    this.RedirectHome = this.RedirectHome.bind(this);
    this.RedirectLogin = this.RedirectLogin.bind(this);
    this.RedirectRegister = this.RedirectRegister.bind(this);
    this.RedirectUploaditem = this.RedirectUploaditem.bind(this);
    this.RedirectManageitem = this.RedirectManageitem.bind(this);

  }

  RedirectHome(event, { name }) {
    event.preventDefault();
    browserHistory.push('#/home');
  }

  RedirectLogin(event, { name }) {
    event.preventDefault();
    browserHistory.push('/login');
  }

  RedirectRegister(event, { name }) {
    event.preventDefault();
    browserHistory.push('/register');
  }

  RedirectUploaditem(event, { name }) {
    event.preventDefault();
    browserHistory.push('/uploaditem');
  }

  RedirectManageitem(event, { name }) {
    event.preventDefault();
    browserHistory.push('/manageitem');
  }

  RedirectLogout(event, { name }) {
    event.preventDefault();
    Meteor.logout();
    hashHistory.push('/home');
  }

  render() {
    var user = Session.get('user');
    console.log(user);
    return (
      <header>
        <Segment size='huge' raised>
          <Menu size='huge' color={'green'} inverted>
            <Menu.Item name='Home' href="#/home" >
              <Icon name='home' />
              Home
            </Menu.Item>
            {!user ?
              <Menu.Menu position='right'>
                <Menu.Item name="user" href="#/login">
                  <Icon name='sign in' />
                  Login
            </Menu.Item>

                <Menu.Item name='Register' href="#/register">
                  <Icon name='users' />
                  Register
            </Menu.Item>
              </Menu.Menu>
              : ""}

            {user ?
              <Menu.Menu position='right'>
                <Dropdown item text={user.username}>
                  <Dropdown.Menu>
                    <Dropdown.Item name='Upload Item' href="#/uploaditem">Upload Item</Dropdown.Item>
                    <Dropdown.Item name='Manage Items' href="#/manageitem">Manage Items</Dropdown.Item>
                    <Dropdown.Item name='Logout' onClick={this.RedirectLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
              : ""}

          </Menu>
        </Segment>
      </header>
    );
  }
}

export default HeadNavBar;









