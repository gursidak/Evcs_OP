import React, { useState } from 'react'
import { MuiThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import validator from "email-validator";
import EditProfileHeading from './EditProfileHeading';
import './Sign.css';

export default function MobileNumber(
  { theme,
    mobileNo,
    activelog,
    handleChange,
    login,
    handleSubmit,
    changeState,
    profileUpdated,
    setProfileUpdateToTrue,
    email,
    handleEmail,
    name,
    handleName,
    onProfilePage
  }
) {
  const [warning, setWarning] = useState(false);
  const [edit, setEdit] = useState(false);

  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempMobile, setTempMobile] = useState(mobileNo);

  const isDisabled = onProfilePage ? tempMobile.length < 10 : mobileNo.length < 10 /* && name.length > 0 && validator.validate(email) */;

  const handleProfile = (e) => {
    if (onProfilePage) {
      if (validator.validate(tempEmail)) {
        setWarning(false);
        // setProfileUpdateToTrue();
        handleName(tempName.trim());
        handleEmail(tempEmail);
        handleChange(tempMobile);
        // setState({name: name.trim()});
        // changeState(3);
        // handleEditSubmit();
        setEdit(false);
      } else {
        setWarning(true);
      }
    } else {
      changeState(1);
    }
  }

  const emailChange = e => {
    setWarning(false);
    handleEmail(e.target.value);
  }

  const styles = theme => ({
    input: {
      fontSize: '1.5em'
    }
  });

  const handleEditSubmit = () => {
    setEdit(!edit);
    setTempName(name);
    setTempEmail(email);
    setTempMobile(mobileNo);
  }

  const handleEditProfileField = (e) => {
    switch (e.target.id) {
      case "tempName":
        setTempName(e.target.value)
        break;

      case "tempEmail":
        setWarning(false);
        setTempEmail(e.target.value)
        break;

      case "tempMobile":
        setTempMobile(e.target.value)
        break;

      default:
        break;
    }
  }

  return (
    <>
      {
        onProfilePage
          ? <EditProfileHeading text="Basic Details" onEditClicked={handleEditSubmit} />
          : <h3>GATS Charging Station</h3>
      }
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <MuiThemeProvider theme={theme}>
          {
            onProfilePage &&
            <>
              <TextField
                id="tempName"
                autoFocus
                fullWidth
                value={onProfilePage ? tempName : name}
                onChange={onProfilePage ? handleEditProfileField : handleName}
                margin="normal"
                label="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter your name"
                type="text"
                required
                disabled={onProfilePage ? !edit : false}
              // inputProps={{ readOnly: true }}
              />
              <TextField
                id="tempEmail"
                fullWidth
                value={onProfilePage ? tempEmail : email}
                onChange={onProfilePage ? handleEditProfileField : emailChange}
                margin="normal"
                label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter Mail ID"
                type="email"
                required
                disabled={onProfilePage ? !edit : false}
                error={warning}
                helperText={warning ? "Please Enter a valid Email Address" : ""}
              />
            </>
          }
          <TextField
            id="tempMobile"
            autoFocus={!onProfilePage}
            fullWidth
            value={onProfilePage ? tempMobile : mobileNo}
            onChange={onProfilePage ? handleEditProfileField : handleChange}
            margin="normal"
            disabled={onProfilePage ? !edit : false}
            label={onProfilePage ? "Mobile Number" : "Enter Mobile Number"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneRoundedIcon />
                </InputAdornment>
              ),
              // className: styles.input
            }}
            placeholder="Enter 10 Digits Mobile Number"
            type="tel"
            // style={{ fontSize: "1.5em" }}
            required
          // InputProps={{ fontSize: '1.5em' }}

          />
          {login && (
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          )}
        </MuiThemeProvider>
        <Button
          type="button"
          variant="contained"
          onClick={handleProfile}
          disabled={isDisabled}
          fullWidth
          color="primary"
          style={{ margin: theme.spacing(3, 0, 2) }}
        >
          {
            isDisabled
              ? (onProfilePage ? "ENTER DETAILS" : "ENTER MOBILE NUMBER")
              : (onProfilePage ? "VERIFY DETAILS AND SAVE" : "REQUEST OTP")
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
