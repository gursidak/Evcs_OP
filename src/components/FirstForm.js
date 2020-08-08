import React from 'react'
import { MuiThemeProvider } from "@material-ui/core";
import FormSnackBar from './FormSnackBar'
import validator from 'gstin-validator';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-mdl';


export default function FirstForm({ theme, showAadhar, gstin, showWarning, handleGSTIN, handleAadhar, handleFirstForm, aadharNumber }) {
    const isDisabled = gstin.length !== 15 || aadharNumber.length !== 12;
    console.log(`ShowWarning in FirstForm component: ${showWarning}`);

    return (
        <div>
            {validator.isValidGSTNumber(gstin) ? "VALID GST" : "INVALID GST"}<br /><br /><br />
            {showWarning &&  <FormSnackBar /> } <br /><br /><br />
            <div className="addVehicleInfo">

                <form className="info-form" >
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            label="GSTIN Number"
                            maxLength='15'
                            type="text"
                            autoFocus
                            onChange={handleGSTIN}
                            value={gstin}
                        />
                        <br />
                        <TextField
                            label="Aadhar Number"
                            maxLength='12'
                            type="text"
                            onChange={handleAadhar}
                            value={showAadhar}
                        />
                        <br />
                    </MuiThemeProvider>
                    <Button
                        type="button"
                        className="otp-button"
                        disabled={isDisabled}
                        onClick={handleFirstForm}
                    >ADD INFO</Button>
                </form>
            </div>
        </div>
    )
}
