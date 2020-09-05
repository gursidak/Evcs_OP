import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core";
import '../App.css';

export default function BankingDetails(
  { theme,
    disabled,
    name,
    ifsc,
    accountNumber,
    handleName,
    handleAccountNumber,
    handleifsc,
    setState,
    changeState,
    onClick,
    onProfilePage
  }
) {
  return (
    <>
      {onProfilePage ? <h4 style={{ margin: '0' }}>Banking Details</h4> : <h3>Provide Banking Details</h3>}
      <form className="sign-in-form">
        <MuiThemeProvider theme={theme}>
          <TextField
            label="Bank A/C Holder Name"
            maxLength="50"
            type="text"
            autoFocus
            margin="normal"
            value={name}
            onChange={handleName}
            placeholder="Enter Bank A/C holder's Name"
            required
            fullWidth
          />
          <br />
          <TextField
            label="Bank A/C Number"
            maxLength="20"
            type="text"
            margin="normal"
            value={accountNumber}
            placeholder="Enter Bank A/C Number"
            onChange={handleAccountNumber}
            fullWidth
            required
          />
          <br />
          <TextField
            label="IFSC Code"
            maxLength="11"
            value={ifsc}
            onChange={handleifsc}
            placeholder="11 Digit IFSC Code"
            type="text"
            margin="normal"
            fullWidth
            required
          />
          <br />
        </MuiThemeProvider>
        <Button
          className="otp-button"
          onClick={onClick}
          style={{ margin: theme.spacing(3, 0, 2) }}
          fullWidth
          disabled={disabled}
        >
          {
            disabled
              ? "ENTER DETAILS"
              : (onProfilePage ? "VERIFY AND SAVE DETAILS" : "REQUEST OTP")
          }
        </Button>
      </form>
    </>
  )
}
