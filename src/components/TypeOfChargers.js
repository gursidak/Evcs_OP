import React from 'react'
import { MuiThemeProvider } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import EditProfileHeading from './EditProfileHeading';
import '../App.css';

export default function TypeOfChargers({ theme, changeState, onProfilePage, chargers, handleCharger }) {
  return (
    <>
      {onProfilePage ? <EditProfileHeading text="Chargers" /> : <h3>Select Chargers</h3>}
      <div className="sign-in-form">
        <div style={!onProfilePage ? { margin: "2em" } : { margin: '0' }}>
          <MuiThemeProvider theme={theme}>
            <FormControlLabel
              control={<Checkbox id="a" checked={chargers.a} color="primary" onChange={handleCharger} />}
              label="Type A "
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox id="b" checked={chargers.b} color="primary" onChange={handleCharger} />}
              label="Type B"
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox id="c" checked={chargers.c} color="primary" onChange={handleCharger} />}
              label="Type C"
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox id="d" checked={chargers.d} color="primary" onChange={handleCharger} />}
              label="Type D"
            />
            <Button
              onClick={() => changeState(10)}
              style={{ margin: theme.spacing(3, 0, 2) }}
              fullWidth
            >
              {
                onProfilePage ? "VERIFY AND SAVE" : "ADD CHARGERS"
              }
            </Button>
          </MuiThemeProvider>
        </div>
      </div>
    </>
  )
}
