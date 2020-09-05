import React, { useState } from 'react'
// import { Button } from 'react-mdl';
import Button from "@material-ui/core/Button";
// import TextField from '@material-ui/core/TextField';
import EditProfileHeading from './EditProfileHeading';
import './Sign.css';

export default function ChooseOptions({ changeState, theme, place, location, onProfilePage }) {
  const [edit, setEdit] = useState(false);
  const [tempLocation, setTempLocation] = useState(location); // Temporary Coordinates
  const [tempPlace, setTempPlace] = useState(place);

  // Showing Map in EditProfile Component
  const [counter, setCounter] = useState(0);

  const handleEditSubmit = () => {
    setTempLocation(location);
    setTempPlace(place);
    setEdit(!edit);
  }

  const chooseGPS = () => {
    changeState(5);
  }

  const chooseTyping = () => {
    changeState(6);
  }

  const nextState = () => {
    changeState(8);
  }

  const chooseGPSInProfile = () => {
    setCounter(1);
  }

  const disabled = onProfilePage ? tempPlace === '' : place === '';

  return (
    <>
      {onProfilePage ? <EditProfileHeading text="Location Details" onEditClicked={handleEditSubmit} /> : <h3>Provide Location</h3>}
      {
        (!onProfilePage || (onProfilePage && counter === 0)) &&
        <>
          <Button
            className="otp-button"
            onClick={onProfilePage ? chooseGPSInProfile : chooseGPS }
            fullWidth
            variant="contained"
            style={{ margin: theme.spacing(3, 0, 2) }}
            disabled={onProfilePage ? !edit : false}
          >SEARCH USING GPS</Button>

          <Button className="otp-button"
            onClick={chooseTyping}
            fullWidth
            variant="contained"
            disabled={onProfilePage ? !edit : false}
            style={{ margin: theme.spacing(3, 0, 2) }}
          >SEARCH BY TYPING</Button>
        </>
      }

      {(!disabled && (!onProfilePage || (onProfilePage && counter === 0))) && <>
        <hr />
        <div style={{ margin: '1em' }}>
          {place}
        </div>
        <hr />
      </>}  

      {
        
      }

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
      {edit &&
        <Button
          type="button"
          variant="contained"
          onClick={handleEditSubmit}
          fullWidth
          color="primary"
          className="discard-button"
        // style={{ margin: theme.spacing(3, 0, 2) }}
        >DISCARD CHANGES</Button>}
    </>
  )
}
