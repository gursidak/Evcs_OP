import React from 'react'
import { MuiThemeProvider } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import '../App.css';

export default function TypeOfChargers({theme, changeState}) {
  return (
    <>
      <h3>Add Chargers</h3>
      <div className="sign-in-form">
        <div style={{ margin: "2em" }}>
          <MuiThemeProvider theme={theme}>
            <FormControlLabel
              control={<Checkbox value="a" color="primary" />}
              label="Type A "
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox value="b" color="primary" />}
              label="Type B"
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox value="c" color="primary" />}
              label="Type C"
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox value="c" color="primary" />}
              label="Type D"
            />
            <Button
              onClick={() => changeState(10)}
              style={{ margin: theme.spacing(3, 0, 2) }}
              fullWidth
            >
              ADD CHARGERS AND PROCEED
                </Button>
          </MuiThemeProvider>
        </div>
      </div>
    </>
  )
}
