import React, { useState } from 'react'
import { MuiThemeProvider } from "@material-ui/core";
// import FormSnackBar from './FormSnackBar'
import validator from 'gstin-validator';
import TextField from '@material-ui/core/TextField';
// import { Button } from 'react-mdl';
// import Button from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";

export default function FirstForm({ theme, showAadhar, gstin, handleGSTIN, handleAadhar, aadharNumber, changeState }) {
    const [warning, setWarning] = useState(false);
    const isDisabled = gstin.length !== 15 || aadharNumber.length !== 12;

    const handleFirstForm = (e) => {
        setWarning(false);
        if (validator.isValidGSTNumber(gstin)) {
            changeState(3);
        } else {
            setWarning(true);
        }
    }

    const gstinChange = e => {
        setWarning(false);
        handleGSTIN(e);
    }

    // 12AAACI1681G1Z0 : Use as a valid GSTIN
    return (
        <>
            <h3>Provide Details:</h3>
            <form className='sign-in-form' >
                <MuiThemeProvider theme={theme}>
                    <TextField
                        label="GSTIN Number"
                        maxLength='15'
                        type="text"
                        autoFocus
                        fullWidth
                        onChange={gstinChange}
                        value={gstin}
                        error={warning}
                        placeholder="15 Digits GSTIN Number"
                        helperText={warning ? "Please Enter a valid GSTIN" : ""}
                    />
                    <br />
                    <TextField
                        label="Aadhar Number"
                        maxLength='12'
                        type="text"
                        onChange={handleAadhar}
                        value={showAadhar}
                        fullWidth
                        placeholder="12 Digits Aadhar Number"
                    />
                    <br />
                </MuiThemeProvider>
                <Button
                    type="button"
                    variant="contained"
                    fullWidth
                    style={{ margin: theme.spacing(3, 0, 2) }}
                    className="otp-button"
                    disabled={isDisabled}
                    onClick={handleFirstForm}
                >{isDisabled ? "ENTER DETAILS" : "REVIEW DETAILS AND SUBMIT"}</Button>
            </form>
        </>
    )
}
