import React, { useState } from 'react'
import { MuiThemeProvider } from "@material-ui/core";
// import FormSnackBar from './FormSnackBar'
import validator from 'gstin-validator';
import TextField from '@material-ui/core/TextField';
// import { Button } from 'react-mdl';
// import Button from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import EditProfileHeading from './EditProfileHeading';


export default function FirstForm({ theme, showAadhar, gstin, handleGSTIN, handleAadhar, aadharNumber, changeState, onProfilePage }) {
  const [warning, setWarning] = useState(false);

  const [edit, setEdit] = useState(false);
  const [tempAadharNumber, setTempAadharNumber] = useState(aadharNumber);
  const [tempGstin, setTempGstin] = useState(gstin);

  const isDisabled =
    onProfilePage
      ? (tempGstin.length !== 15 || tempAadharNumber.length !== 12)
      : (gstin.length !== 15 || aadharNumber.length !== 12);

  const handleFirstForm = (e) => {
    if (onProfilePage) {
      if (validator.isValidGSTNumber(tempGstin)) {
        setWarning(false);
        handleGSTIN(tempGstin);
        // if (isNaN(num) || num.length > 12)
        handleAadhar(tempAadharNumber);
        // setTempAadharNumber(aadharNumber);
        // setTempGstin(gstin);
        setEdit(!edit);
        // handleEditSubmit();
        // setEdit(false);
      } else {
        setWarning(true);
      }
    } else {
      changeState(3);
    }
  }

  const gstinChange = e => {
    setWarning(false);
    handleGSTIN(e);
  }

  const handleEditProfileField = (e) => {
    switch (e.target.id) {
      case "tempAadharNumber":
        const t = e.target.value;
        if (isNaN(t) || t.length > 12) break;
        setTempAadharNumber(t);
        // handleAadhar(e.target.value)
        break;

      case "tempGstin":
        setWarning(false);
        setTempGstin(e.target.value)
        break;

      default:
        break;
    }
  }

  const handleEditSubmit = () => {
    setTempAadharNumber(aadharNumber);
    setTempGstin(gstin);
    setEdit(!edit);

  }

  // 12AAACI1681G1Z0 : Use as a valid GSTIN
  return (
    <>
      {onProfilePage ? <EditProfileHeading text="GSTIN Details" onEditClicked={handleEditSubmit} /> : <h3>Provide Details:</h3>}
      <form className='sign-in-form' >
        <MuiThemeProvider theme={theme}>
          <TextField
            id="tempGstin"
            label="GSTIN Number"
            maxLength='15'
            type="text"
            autoFocus
            fullWidth
            onChange={onProfilePage ? handleEditProfileField : gstinChange}
            value={onProfilePage ? tempGstin : gstin}
            error={warning}
            placeholder="15 Digits GSTIN Number"
            helperText={warning ? "Please Enter a valid GSTIN" : ""}
            disabled={onProfilePage ? !edit : false}
          />
          <br />
          <TextField
            id="tempAadharNumber"
            label="Aadhar Number"
            maxLength='12'
            type="text"
            onChange={onProfilePage ? handleEditProfileField : handleAadhar}
            value={onProfilePage ? tempAadharNumber : aadharNumber}
            fullWidth
            placeholder="12 Digits Aadhar Number"
            disabled={onProfilePage ? !edit : false}
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
        >{
            isDisabled
              ? "ENTER DETAILS"
              : (onProfilePage ? "VERIFY DETAILS AND SAVE" : "VERIFY DETAILS AND PROCEED")
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
      </form>
    </>
  )
}
