import React, { useRef, useState, useEffect } from "react";
import Geocode from "react-geocode";
import { Button } from 'react-mdl';
import TextField from '@material-ui/core/TextField';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from "react-google-maps";
import './Sign.css';

function Map({ location, handleLocation, changeState, place, handlePlace }) {
    Geocode.setApiKey("AIzaSyCbTDD_FfveKWUS5YnpMAkqFM2G_iMNQmw");
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

        const loc = {
            lat: crd.latitude,
            lng: crd.longitude
        }
        handleLocation(loc);
        getAndChangeAddress(loc);
        setCenter(loc);
        setShowMap(true);
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
        getAndChangeAddress(newLocation);
    }

    const returnToMenu = () => {
        changeState(4);
    }

    const getAndChangeAddress = loc => {
        const lat = loc.lat.toString();
        const lng = loc.lng.toString();
        console.log(typeof lat);

        console.log(`From getAddress() function => lat: ${lat},  lng: ${lng}`);
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(`Formatted address: ${address}`);
                handlePlace(address);
            },
            error => {
                console.error(error);
                console.log('Error occuredd in getting address');
            }
        );
    }

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
            {location.lat !== '' && <TextField id="outlined-basic" label="Location" variant="outlined" disabled value={place} />}
            <Button className="otp-button" onClick={returnToMenu}>SAVE LOCATION</Button>
        </div>
    );
}

export default withScriptjs(withGoogleMap(Map));
