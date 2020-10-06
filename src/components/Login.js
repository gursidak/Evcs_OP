import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import OtpInput from "react-otp-input";
import { MuiThemeProvider } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import './Sign.css';

export default function Login({ login, otp, theme, mobileNo, handleOTPChange, password, handlePassword, changeState, clearMobileNumber }) {
  const [continueByPassword, setContinueByPassword] = useState(true);
  const [warning, setWarning] = useState(false);
  const isDisabled = otp.length < 4;
  const text = continueByPassword ? (login ? "LOGIN" : "SIGN UP") : isDisabled ? "ENTER OTP" : "VERIFY AND PROCEED";
  const secondButtonText = continueByPassword ? 'GET OTP ON YOUR PHONE' : 'ENTER YOUR PASSWORD';

  const passwordChange = e => {
    setWarning(false);
    handlePassword(e);
  }

  const handleLogin = () => {
    // If user is loggin In
    if (login) {
      // 1. Login By Password
      if (continueByPassword) {
        // checkPassword() // By Backend
      } else { // 2. Login By OTP
        // checkOTP() // By backend
      }
      changeState(10);
      
    } else { // User is signing up
      // 1. Sign Up By Password
      if (continueByPassword) {
        if (password.length < 8) {
          setWarning(true);
          return;
        }
        changeState(2);
      } else { // Sign Up  by OTP
        // checkOTP // By backend
        changeState(2);
      }
    }
  }

  const handleContinueOption = () => {
    handleOTPChange('');
    handlePassword('');
    setWarning(false);
    setContinueByPassword(prevOption => !prevOption);
  }

  return (
    <>
      <div className="otp-input-box">
        {
          login
            ? (
              continueByPassword
                ? <h3 className="login-heading">Login</h3>
                : <h4 className="login-heading">Authentication Required</h4>
            )
            : <h3 className="login-heading">Sign Up</h3>
        }
        <div className="mobile-number">
          {mobileNo}
          <Button onClick={() => { clearMobileNumber(); changeState(0); }}>Change</Button>
        </div>
        <MuiThemeProvider theme={theme}>
          {
            continueByPassword
              ? <TextField
                id="tempGstin"
                label="Password"
                type="password"
                autoFocus
                fullWidth
                error={warning}
                placeholder="Enter your Password"
                helperText={warning ? "Password must be of atleast 8 characters" : ""}
                value={password}
                onChange={passwordChange}
              />
              : <OtpInput
                value={otp}
                onChange={handleOTPChange}
                numInputs={4}
                separator={<span> </span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle="otp-input"
                focusStyle="focus-style"
                containerStyle="otp-box-container"
              />
          }
          <div className="remember-me">
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </div>

          <Button
            className="otp-button"
            disabled={continueByPassword ? false : isDisabled}
            onClick={handleLogin}
            fullWidth
            variant="contained"
            style={{ margin: theme.spacing(1, 0, 2) }}
          >{text}</Button>

          <div className="or-content">OR</div>

          <Button
            className="otp-button"
            onClick={handleContinueOption}
            fullWidth
            variant="contained"
            style={{ margin: theme.spacing(2, 0, 2) }}
          >{secondButtonText}</Button>
        </MuiThemeProvider>
      </div>
    </>
  )
}
