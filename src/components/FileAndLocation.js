import React from 'react'
import './Sign.css';
// import { Button } from 'react-mdl';
import Button from "@material-ui/core/Button";
import FormSnakBar from './FormSnackBar';
import './Css/App.css';

export default function FileAndLocation({ changeState, theme, handleFile, fileWarning, aadharUIM, gstinFile }) {

    const onClick = () => {
        changeState(7);
    }

    const disabled = !(aadharUIM && gstinFile);
    return (
        <>
            <h3>Upload Files</h3>
            <div className="sign-in-form">
                {fileWarning && <FormSnakBar text="Please Upload image and PDFs only" severity="warning" />}
                <label htmlFor="gstinFile">GSTIN</label><br />
                <input type="file" alt="gstin" id="gstinFile" accept="image/jpeg, .pdf" onChange={handleFile}></input> <br /> <br />
                <label htmlFor="aadharUIM">Aadhar UIM</label><br />
                <input type="file" alt="aadharUIM" id="aadharUIM" accept="image/jpeg, .pdf" onChange={handleFile}></input > <br /> <br />

                <Button
                    className="otp-button"
                    fullWidth
                    variant="contained"
                    style={{ margin: theme.spacing(3, 0, 2) }}
                    onClick={onClick}
                    disabled={disabled}
                >{disabled ? "PLEASE SELECT FILES" : "REVIEW DOCUMENTS AND SUBMIT"}</Button>
            </div>
        </>
    )
}
