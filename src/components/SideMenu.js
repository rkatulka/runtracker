import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div>
      <Drawer variant="permanent">
        <List>
          {["Add Activity", "Custom Tags"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Sign Out"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </div>
    )
  }
}

export default SideMenu;
