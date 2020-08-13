import React from 'react'
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import './Css/App.css'
export default function Copyright() {
    return (
        <div id="footer">
            < Typography variant="body2" color="textSecondary" align="center" >
                {"Copyright © "}
                < Link color="inherit" href="#" >
                    GATS SCS,
        </Link > {" "}
                {new Date().getFullYear()}
                {"."}
            </Typography >
        </div >
    );
}