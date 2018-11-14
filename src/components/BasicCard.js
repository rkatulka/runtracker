import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './styles/BasicCard.css';

class BasicCard extends Component {
  /*constructor(props) {

  }*/

  render() {
    return(
      <Card className="card">
        <Typography>
          Testing Card!
        </Typography>
      </Card>
    );
  }
}

export default BasicCard;
