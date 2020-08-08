import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from "@material-ui/core";
import { Button } from 'react-mdl';
import './FindLocation.css';

export default function FindLocation({ theme, changeState, handlePlace }) {

    const onClick = () => {
        changeState(4);
    }
    const updatePlace = (e) => {
        handlePlace(e.target.value);
    }

    return (
        <div className="find-location">
            <Button
                onClick={onClick}
                id="location-back-button"
            ><i
                id="back-arrow"
                class="fa fa-arrow-left"
                aria-hidden="true"
            ></i>
            </Button>
            <MuiThemeProvider theme={theme}>
                <TextField
                    label="Enter your location"
                    type="text"
                    autoFocus
                    onChange={updatePlace}
                />
                <br />
            </MuiThemeProvider>
        </div>
    )
}
