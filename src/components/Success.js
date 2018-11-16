import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


export class Success extends Component {

  continue = e => {
    e.preventDefault();
    // Procces form //
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    // const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your SUbmission</h1>
          <p>You will get an email with further instructions</p>
          {/* <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <ListItem
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem
              primaryText="City"
              secondaryText={city}
            />
            <ListItem
              primaryText="Bio"
              secondaryText={bio}
            />
          </List> */}
          <br />
       
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Success
