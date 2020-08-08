import React from 'react'
import './Sign.css';
import { Button } from 'react-mdl';

export default function FileAndLocation({ changeState, handlePlace, handleLocation }) {
    const onClick = () => {
        handlePlace('');
        handleLocation({});
        changeState(5);
    }

    return (
        <div className="file-upload-form">
            <h3>Upload Files</h3>
            <div className="files-input">
                <label for="gstin">GSTIN</label> :
                <input type="file" alt="gstin" id="gstin" accept="image/jpeg, .pdf"></input> <br /> <br />
                <label for="uim">Aadhar Card UIM</label> :
                <input type="file" alt="Aadhar Card UIM" id="uim" accept="image/jpeg, .pdf"></input> <br /> <br />
                <input type="image" alt=""></input>
                <Button
                    className="otp-button"
                    onClick={onClick}
                >SELECT LOCATION</Button>
            </div>
        </div>
    )
}
