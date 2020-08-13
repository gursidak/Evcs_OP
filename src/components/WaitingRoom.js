import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './Sign.css';

export default function WaitingRoom() {
    return (
        <>
            <div className="sign-in-form">
                <div id="circular-progression">
                    <CircularProgress size='7em' color='secondary'/> <br />
                </div>
                <div id="waiting-text">Please wait while your details are being verified...</div>
            </div>
        </>
    )
}
