import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import './styles/NavBar.css'

class NavBar extends Component {
  render() {
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant = "title" color = "inherit" className="navTitle">
              Run Tracker!
            </Typography>
            <Button color="inherit" className="loginButton">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBar;
