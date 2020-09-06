import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core";
import EditProfileHeading from './EditProfileHeading';
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
  const [edit, setEdit] = useState(false);
  const [tempAccountHolderName, setTempAccountHolderName] = useState(name);
  const [tempAccountNumber, setTempAccountNumber] = useState(accountNumber);
  const [tempIfsc, setTempIfsc] = useState(ifsc);

  const isDisabled = onProfilePage
    ? !(
      tempAccountHolderName &&
      tempAccountNumber &&
      tempIfsc.length >= 11
    )
    : disabled;

  const handleProfile = (e) => {
    if (onProfilePage) {
      handleName(tempAccountHolderName);
      handleAccountNumber(tempAccountNumber);
      handleifsc(tempIfsc);
      setEdit(false);
    } else {
      onClick();
    }
  }

  const handleEditSubmit = () => {
    setEdit(!edit);
    setTempAccountHolderName(name);
    setTempAccountNumber(accountNumber);
    setTempIfsc(ifsc);
  }

  const handleEditProfileField = (e) => {
    switch (e.target.id) {
      case "tempAccountHolderName":
        setTempAccountHolderName(e.target.value.replace(/[^a-zA-Z ]/g, ""))
        break;

      case "tempAccountNumber":
        if (e.target.value.length > 20) break;
        setTempAccountNumber(e.target.value.replace(/[^0-9]/g, ''))
        break;

      case "tempIfsc":
        if (e.target.value.length > 11) break;
        setTempIfsc(e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase())
        break;

      default:
        break;
    }
  }

  return (
    <>
      {onProfilePage ? <EditProfileHeading text="Banking Details" onEditClicked={handleEditSubmit} /> : <h3>Provide Banking Details</h3>}
      <form className="sign-in-form">
        <MuiThemeProvider theme={theme}>
          <TextField
            id="tempAccountHolderName"
            label="Bank A/C Holder Name"
            maxLength="50"
            type="text"
            autoFocus
            margin="normal"
            value={onProfilePage ? tempAccountHolderName : name}
            onChange={onProfilePage ? handleEditProfileField : handleName}
            placeholder="Enter Bank A/C holder's Name"
            disabled={onProfilePage ? !edit : false}
            required
            fullWidth
          />
          <br />
          <TextField
            id="tempAccountNumber"
            label="Bank A/C Number"
            maxLength="20"
            type="text"
            margin="normal"
            value={onProfilePage ? tempAccountNumber : accountNumber}
            placeholder="Enter Bank A/C Number"
            disabled={onProfilePage ? !edit : false}
            onChange={onProfilePage ? handleEditProfileField : handleAccountNumber}
            fullWidth
            required
          />
          <br />
          <TextField
            id="tempIfsc"
            label="IFSC Code"
            maxLength="11"
            value={onProfilePage ? tempIfsc : ifsc}
            onChange={onProfilePage ? handleEditProfileField : handleifsc}
            placeholder="11 Digit IFSC Code"
            type="text"
            disabled={onProfilePage ? !edit : false}
            margin="normal"
            fullWidth
            required
          />
          <br />
        </MuiThemeProvider>

        {
          (!onProfilePage || (onProfilePage && edit)) &&
          <Button
            className="otp-button"
            onClick={handleProfile}
            style={{ margin: theme.spacing(3, 0, 2) }}
            fullWidth
            disabled={isDisabled}
          >
            {
              isDisabled
                ? "ENTER DETAILS"
                : (onProfilePage ? "VERIFY AND SAVE DETAILS" : "VERIFY DETAILS AND PROCEED")
            }
          </Button>
        }

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
