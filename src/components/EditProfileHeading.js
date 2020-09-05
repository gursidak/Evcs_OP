import React from 'react';
import Button from "@material-ui/core/Button";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import './Sign.css';

export default function EditProfileHeading({ text, onEditClicked }) {
    return (
        <div className="heading">
            <h4 style={{ margin: '0' }}>{text}</h4>
            <Button className="edit-button" onClick={onEditClicked}><EditRoundedIcon /></Button>
        </div>
    )
}
