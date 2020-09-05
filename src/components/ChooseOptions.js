import React from 'react'
// import { Button } from 'react-mdl';
import Button from "@material-ui/core/Button";
// import TextField from '@material-ui/core/TextField';
import EditProfileHeading from './EditProfileHeading';
import './Sign.css';

export default function ChooseOptions({ changeState, theme, place, onProfilePage }) {
  const chooseGPS = () => {
    changeState(5);
  }

  const chooseTyping = () => {
    changeState(6);
  }

  const nextState = () => {
    changeState(8);
  }

  const disabled = place === '';

  return (
    <>
      {onProfilePage ? <EditProfileHeading text="Edit Location Details" /> : <h3>Provide Location</h3>}
      <Button
        className="otp-button"
        onClick={chooseGPS}
        fullWidth
        variant="contained"
        style={{ margin: theme.spacing(3, 0, 2) }}
      >SEARCH USING GPS</Button>

      <Button className="otp-button"
        onClick={chooseTyping}
        fullWidth
        variant="contained"
        style={{ margin: theme.spacing(3, 0, 2) }}
      >SEARCH BY TYPING</Button>

      {!disabled && <>
        <hr />
        <div style={{ margin: '1em' }}>
          {place}
        </div>
        <hr />
      </>}

      <Button className="otp-button"
        onClick={nextState}
        fullWidth
        variant="contained"
        style={{ margin: theme.spacing(3, 0, 2) }}
        disabled={disabled}
      >
        {
          disabled
            ? "SELECT OPTION"
            : (onProfilePage ? "VERIFY AND SAVE LOCATION" : "VERIFY LOCATION AND PROCEED")
        }
      </Button>
      
    </>
  )
}
