import React from 'react'
import './Sign.css';
import { Button } from 'react-mdl';
import TextField from '@material-ui/core/TextField';

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

export default function FileAndLocation({ location, changeState, handlePlace, handleLocation, handleGPS, useGPS, place }) {

    const changeToMap = () => {
        changeState(5);
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
                    onClick={changeToMap}
                >SELECT LOCATION</Button>
                {location.lat !== '' && <TextField id="outlined-basic" label="Location" variant="outlined" disabled defaultValue={place}/>}

                <Button
                    className="otp-button"
                >SUBMIT</Button>
            </div>
        </div>
    )
}
