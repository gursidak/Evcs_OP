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
  }
) {
  const isDisabled = mobileNo.length !== 10 /* && name.length > 0 && validator.validate(email) */;
  const onProfilePage = activelog === 10;
  const [warning, setWarning] = useState(false);
  const handleProfile = (e) => {
    if (onProfilePage) {
      setWarning(false);
      if (validator.validate(email)) {
        setProfileUpdateToTrue();
        handleName(name.trim());
        // setState({name: name.trim()});
        // changeState(3);
      } else {
        setWarning(true);
      }
    } else {
      changeState(1);
    }
  }

  const emailChange = e => {
    setWarning(false);
    handleEmail(e);
  }
  return (
    <>
      {onProfilePage ? <h4 style={{ margin: '0' }}>Basic Details</h4> : <h3>GATS Charging Station</h3>}
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <MuiThemeProvider theme={theme}>
          {
            onProfilePage &&
            <>
              <TextField
                autoFocus
                fullWidth
                value={name}
                onChange={handleName}
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
                // inputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                value={email}
                onChange={emailChange}
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
                error={warning}
                helperText={warning ? "Please Enter a valid Email Address" : ""}
              />
            </>
          }
          <TextField
            autoFocus={!onProfilePage}
            fullWidth
            value={mobileNo}
            onChange={handleChange}
            margin="normal"
            label={onProfilePage ? "Mobile Number" : "Enter Mobile Number"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneRoundedIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Enter 10 Digits Mobile Number"
            type="tel"
            required
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
              : (onProfilePage ? "VERIFY AND SUBMIT DETAILS" : "REQUEST OTP")
          }
        </Button>
      </form>
    </>
  )
}
