import React, { useRef, useState, useCallback, useEffect } from "react";
import { Button } from 'react-mdl';
import TextField from '@material-ui/core/TextField';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from "react-google-maps";
import './Sign.css';

/* 
    Open Maps with a default center and zoom
    onComponent mount, drag marker to current location 
    onDragEnd update current location

*/

// { lat: 54.68916, lng: 25.2798 }
function Map({ location, handleLocation, changeState }) {
    const [center, setCenter] = useState(location);
    const [showMap, setShowMap] = useState(false);
    const refMap = useRef(null);

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10000
    };

    function success(pos) {
        var crd = pos.coords;
        console.log(crd);
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        location = {
            lat: crd.latitude,
            lng: crd.longitude
        }
        handleLocation(location);
        setCenter(location);
        setShowMap(true);
        // changeState(6);
        /* if (crd.accuracy > 500) {
            console.log('Perhaps you should check your device settings for location accuracy');
            console.log('Or you have not provided permissions for this device\'s location in the device settings');
        } else {
            successful = true;
            console.log(`wasSuccesfull() became ${successful} inside else block of success() function`);
            location = {
                lat: crd.latitude,
                lng: crd.longitude
            }
        } */

    }

    function error(err) {
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            console.log("loading");
        }
        let typeErr = err.code;
        console.log(`Code: ${typeErr}`);
        switch (typeErr) {
            case 1:
                console.log('User has not given permissions');
                break;

            case 2:
                console.log('The acquisition of the geolocation failed because at least one internal source of position returned an internal error.');
                break;

            case 3:
                console.log('Timeout reached before obtaining information');
                break;

            default:
                break;
        }
        console.warn(`ERROR(${err.code}): ${err.message}`);
        changeState(6);
    }

    const handleBoundsChanged = () => {
        const mapCenter = refMap.current.getCenter(); //get map center
        setCenter(mapCenter);
        // handleLocation(mapCenter);
        // console.log(mapCenter.lat());
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, [])

    const handleDragEnd = () => {
        const newCenter = refMap.current.getCenter();
        const newLocation = {
            lat: newCenter.lat(),
            lng: newCenter.lng()
        }
        handleLocation(newLocation);
    }

    const returnToMenu = () => {
        changeState(4);
    }

    // { lat: 25.2793479, lng: 78.9094509 }
    return (
        <div className="map">
            {showMap && <GoogleMap
                ref={refMap}
                defaultZoom={17}
                defaultCenter={center}
                onBoundsChanged={handleBoundsChanged}
                onDragEnd={handleDragEnd}
            >
                <Marker position={center} />
            </GoogleMap>}
            {location.lat !== '' && <TextField id="outlined-basic" label="Location" variant="outlined" disabled/> }
            <Button className="otp-button" onClick={returnToMenu}>SAVE LOCATION</Button>
        </div>
    );
}

export default withScriptjs(withGoogleMap(Map));
