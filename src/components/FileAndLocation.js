import React from 'react'
import './Sign.css';
import { Button } from 'react-mdl';

/* 
    1. Ask user For Co-ordinates
        If permision is available:
            If user gives permission:
                Fetch co-ordinates:
                    If successfull, pass co-ordinates to maps.
        Else (Permission is not available):
            Ask User for permission
                If user declines:
                    Get co-ordinates by manual entering the place name.
                If user accepts:
                    Fetch co-ordinates:
                    If successfull, pass co-ordinates to maps.
*/

export default function FileAndLocation({ location, changeState, handlePlace, handleLocation, handleGPS, useGPS }) {
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
        changeState(5);
    }

    const askForLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    return (
        <div className="file-upload-form">
            <h3>Upload Files</h3>
            <div className="files-input">
                <label htmlFor="gstin">GSTIN</label> :
                <input type="file" alt="gstin" id="gstin" accept="image/jpeg, .pdf"></input> <br /> <br />
                <label htmlFor="uim">Aadhar Card UIM</label> :
                <input type="file" alt="Aadhar Card UIM" id="uim" accept="image/jpeg, .pdf"></input> <br /> <br />
                <input type="image" alt=""></input>
                <Button
                    className="otp-button"
                    onClick={askForLocation}
                >SELECT LOCATION</Button>
                <Button
                    className="otp-button"
                >SUBMIT</Button>
            </div>
        </div>
    )
}
