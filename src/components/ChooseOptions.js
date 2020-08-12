import React from 'react'
import './Sign.css';
// import { Button } from 'react-mdl';
import Button from "@material-ui/core/Button";

export default function ChooseOptions({ changeState, theme }) {
    const chooseGPS = () => {
        changeState(5);
    }

    const chooseTyping = () => {
        changeState(6);
    }

    return (
        <>
            <h3>Select Location</h3>
            <div className="sign-in-form">
                <Button
                    className="otp-button"
                    onClick={chooseGPS}
                    fullWidth
                    variant="contained"
                    style={{ margin: theme.spacing(3, 0, 2) }}
                >USE GPS</Button>
                <Button className="otp-button"
                    onClick={chooseTyping}
                    fullWidth
                    variant="contained"
                    style={{ margin: theme.spacing(3, 0, 2) }}
                >TYPE YOUR LOCATION</Button>
            </div>
        </>
    )
}
