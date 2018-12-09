import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import './styles/BasicCard.css';

class BasicCard extends Component {
  /*constructor(props) {

  }*/

  render() {
    return(
      <Card>
        <CardContent>
          <CardHeader title="Running activity" />
          <Typography>
            Testing Card!
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default BasicCard;
