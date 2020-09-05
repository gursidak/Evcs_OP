import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import EditProfileHeading from './EditProfileHeading';
import WrappedMap from './Map';
import './Sign.css';

export default function ChooseOptions(
  {
    changeState,
    theme,
    place,
    location,
    onProfilePage,
    handleLocation,
    handlePlace,
    useGPS,
    handleUseGPS
  }
) {
  const [edit, setEdit] = useState(false);
  const [tempLocation, setTempLocation] = useState(location); // Temporary Coordinates
  const [tempPlace, setTempPlace] = useState(place);

  // Showing Map in EditProfile Component
  const [counter, setCounter] = useState(0);

  const handleEditSubmit = () => {
    setTempLocation(location);
    setTempPlace(place);
    setEdit(!edit);
    setCounter(0);
  }

  const chooseGPS = () => {
    changeState(5);
  }

  const chooseTyping = () => {
    changeState(6);
  }

  const onClick = () => {
    if (onProfilePage) {
      handleLocation(tempLocation);
      handlePlace(tempPlace);
      setEdit(false);
    } else {
      changeState(8);
    }
  }

  const chooseGPSInProfile = () => {
    setCounter(1);
  }

  const handleTempLocation = (location) => {
    setTempLocation(location)
  }

  const handleTempPlace = (place) => {
    setTempPlace(place);
  }

  const disabled = onProfilePage ? tempPlace === '' : place === '';

  return (
    <>
      {onProfilePage ? <EditProfileHeading text="Location Details" onEditClicked={handleEditSubmit} /> : <h3>Provide Location</h3>}
      {
        (!onProfilePage || (onProfilePage && counter === 0 && edit)) &&
        <>
          <Button
            className="otp-button"
            onClick={onProfilePage ? chooseGPSInProfile : chooseGPS}
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

      {
        (!disabled && (!onProfilePage || (onProfilePage && counter === 0))) &&
        <>
          <hr />
          <div style={{ margin: '1em' }}>
            {onProfilePage ? tempPlace : place}
          </div>
          <hr />
        </>
      }

      {
        counter === 1 && edit
          ? <div style={{ height: "400px", width: "100%", position: "relative" }}>
            <h5>Confirm Location</h5>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbTDD_FfveKWUS5YnpMAkqFM2G_iMNQmw`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: `50%`,
                    width: "100%",
                    // padding: "50%"
                    // marginBottom: "25%"
                    position: "absolute",
                    // marginTop: "25%",
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
              location={tempLocation}
              handleLocation={handleTempLocation}
              changeState={changeState}
              place={tempPlace}
              handlePlace={handleTempPlace}
              useGPS={useGPS}
              // handleUseGPS={handleUseGPS}
              onProfilePage={onProfilePage}
              setCounter={setCounter}
            />
          </div>
          : ""
      }

      {
        (!onProfilePage || (onProfilePage && counter === 0 && edit)) &&
        <Button className="otp-button"
          onClick={onClick}
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
      }

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
