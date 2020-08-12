import React from 'react'
import './Sign.css';
// import { Button } from 'react-mdl';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import FormSnakBar from './FormSnackBar';
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

export default function FileAndLocation({ location, changeState, handlePlace, handleLocation, handleGPS, useGPS, place, theme, handleFile, fileWarning }) {

    const onClick = () => {
        changeState(7);
    }

    return (
        <>
            <h3>Upload Files</h3>
            <div className="sign-in-form">
                {fileWarning && <FormSnakBar text="Please Upload image and PDFs only" severity="warning"/>}
                <label htmlFor="gstinFile">GSTIN</label><br />
                <input type="file" alt="gstin" id="gstinFile" accept="image/jpeg, .pdf" onChange={handleFile}></input> <br /> <br />
                <label htmlFor="aadharUIM">Aadhar UIM</label><br />
                <input type="file" alt="aadharUIM" id="aadharUIM" accept="image/jpeg, .pdf" onChange={handleFile}></input > <br /> <br />
                {/* <Button
                    className="otp-button"
                    onClick={onClick}
                    fullWidth
                    variant="contained"
                    style={{ margin: theme.spacing(3, 0, 2) }}
                >SELECT LOCATION</Button> */}
                {/* <TextField id="outlined-basic" label="Location" variant="outlined" disabled defaultValue="Unname Street, East Vinod Nagar, Delhi" /> */}

                <Button
                    className="otp-button"
                    fullWidth
                    variant="contained"
                    style={{ margin: theme.spacing(3, 0, 2) }}
                    onClick={onClick}
                >REVIEW DOCUMENTS AND SUBMIT</Button>
            </div>
        </>
    )
}
