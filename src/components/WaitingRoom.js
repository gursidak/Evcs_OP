import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './Sign.css';

export default function WaitingRoom({ changeState }) {
    const [redirect, setRedirect] = useState(false);
    // const goNext = () => changeState(9)
    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 4000);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <>
            <div className="sign-in-form">
                <div id="circular-progression">
                    <CircularProgress size='7em' color='secondary' /> <br />
                </div>
                <div id="waiting-text">Please wait while your details are being verified...</div>
                {redirect && changeState(9)}
            </div>
        </>
    )
}
