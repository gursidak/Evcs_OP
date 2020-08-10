import React from 'react'
import './Sign.css';
import { Button } from 'react-mdl';

export default function ChooseOptions({ changeState }) {
    const chooseGPS = () => {
        changeState(5);
    }

    const chooseTyping = () => {
        changeState(6);
    }

    return (
        <div className="file-upload-form">
            <Button className="otp-button" onClick={chooseGPS}>USE GPS</Button>
            <Button className="otp-button" onClick={chooseTyping}>TYPE YOUR LOCATION</Button>
        </div>
    )
}
