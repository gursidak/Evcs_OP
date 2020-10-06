import React, { useState } from 'react'
import { MuiThemeProvider } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import EditProfileHeading from './EditProfileHeading';
import '../App.css';

export default function TypeOfChargers({ theme, changeState, onProfilePage, chargers, handleCharger }) {
  const [edit, setEdit] = useState(false);
  const [tempChargers, setTempChargers] = useState(chargers); // Temporary charger types

  const handleEditSubmit = () => {
    setTempChargers(chargers);
    setEdit(!edit);
  }

  const handleTempCharger = e => {
    const temp = e.target ? e.target.checked : e;
    const id = e.target.id;
    console.log('event', e);
    id && setTempChargers({                 // object that we want to update
        ...tempChargers,    // keep all other key-value pairs
        [id]: temp       // update the value of specific key (charger)
    });
  }

  const onClick = () => {
    if (onProfilePage) {
      handleCharger(tempChargers);
      setEdit(false);
    } else {
      changeState(10);
    }
  }

  const disabled = onProfilePage ? !edit : false;

  return (
    <>
      {onProfilePage ? <EditProfileHeading text="Chargers" onEditClicked={handleEditSubmit} /> : <h3>Select Chargers</h3>}
      <div className="sign-in-form">
        <div style={!onProfilePage ? { margin: "2em" } : { margin: '0' }}>
          <MuiThemeProvider theme={theme}>
            <FormControlLabel
              control={<Checkbox id="a" checked={onProfilePage ? tempChargers.a : chargers.a} color="primary" onChange={onProfilePage ? handleTempCharger : handleCharger} disabled={onProfilePage ? !edit : false} />}
              label="Type A "
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox id="b" checked={onProfilePage ? tempChargers.b : chargers.b} color="primary" onChange={onProfilePage ? handleTempCharger : handleCharger} disabled={onProfilePage ? !edit : false} />}
              label="Type B"
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox id="c" checked={onProfilePage ? tempChargers.c : chargers.c} color="primary" onChange={onProfilePage ? handleTempCharger : handleCharger} disabled={onProfilePage ? !edit : false} />}
              label="Type C"
            />{" "}
            <br />
            <FormControlLabel
              control={<Checkbox id="d" checked={onProfilePage ? tempChargers.d : chargers.d} color="primary" onChange={onProfilePage ? handleTempCharger : handleCharger} disabled={onProfilePage ? !edit : false} />}
              label="Type D"
            />

            {
              (!onProfilePage || (onProfilePage && edit)) &&
              <Button
                onClick={onClick}
                style={{ margin: theme.spacing(3, 0, 2) }}
                fullWidth
                disabled={disabled}
              >
                {
                  disabled
                    ? "SELECT OPTION"
                    : (onProfilePage ? "VERIFY AND SAVE CHARGERS" : "VERIFY CHARGERS AND PROCEED")
                }
              </Button>
            }
          </MuiThemeProvider>
          {edit &&
            <Button
              type="button"
              variant="contained"
              onClick={handleEditSubmit}
              fullWidth
              color="primary"
              className="discard-button"
            >DISCARD CHANGES</Button>}
        </div>
      </div>
    </>
  )
}
