import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';



class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClicked: false,
      loginClicked: true,
    }

    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  handleMenuButtonClick() {
    this.setState(prevState => ({
      menuClicked: !prevState.menuClicked
    }));
  }

  handleLoginButtonClick() {
    this.setState(prevState => ({
      loginClicked: !prevState.loginClicked
    }));
  }

  render() {
    return(
      <div>
        <AppBar className="navBar">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu" onClick={ this.handleMenuButtonClick }>
              <MenuIcon />
              {this.state.menuClicked ? 'T' : 'F'}
            </IconButton>
            <Typography variant = "title" color = "inherit" className="navTitle">
              Run Tracker!
            </Typography>
            <Button color="inherit" className="loginButton" onClick={ this.handleLoginButtonClick }>
              {this.state.loginClicked ? 'Login' : 'Sign Out'}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBar;
