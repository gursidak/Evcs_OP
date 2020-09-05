import React from 'react'
import WrappedMap from "./Map";

export default function MapInSign({
  mapElement,
  location,
  handleLocation,
  changeState,
  place,
  handlePlace,
  useGPS,
  handleUseGPS,
  goToProfileEdit,
  goToMapInEditProfile,
  onProfilePage
}) {
  return (
    <>
      <h3>Confirm Location</h3>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbTDD_FfveKWUS5YnpMAkqFM2G_iMNQmw`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={
              onProfilePage
                ? {
                  height: `50%`,
                  width: "95%",
                  position: "relative",
                  marginTop: "25%",
                }
              : {
                  height: `50%`,
                  width: "95%",
                  position: "absolute",
                  marginTop: "25%",
                }
            }
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
        handleLocation={handleLocation}
        changeState={changeState}
        place={place}
        handlePlace={handlePlace}
        useGPS={useGPS}
        handleUseGPS={handleUseGPS}
        goToProfileEdit={goToProfileEdit}
        goToMapInEditProfile={goToMapInEditProfile}
      />
    </>
  )
}
