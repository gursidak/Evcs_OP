import React, { Component } from 'react';
import './Css/App.css'
// import { Button } from 'react-mdl';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import OtpInput from 'react-otp-input';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import FirstForm from './FirstForm';
import Link from "@material-ui/core/Link";
import FileAndLocation from './FileAndLocation';
import FindLocation from './FindLocation'
// import FormSnackBar from './FormSnackBar'
import WrappedMap from './Map';
import ChooseOptions from './ChooseOptions'
import Typography from "@material-ui/core/Typography";
import WebAppBar from './WebAppBar';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import './Sign.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
                GATS SCS, 
        </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class Sign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activelog: 0,
            imageUploaded: null,
            mobileNo: "",
            otp: '',
            aadharNumber: '',
            gstin: '',
            place: '',
            location: {
                lat: '',
                lng: ''
            },
            useGPS: true
        };
    }

    changeState = activeId => {
        this.setState({ activelog: activeId });
    }

    /* fileSelector(event) {
        this.setState({
            imageUploaded: event.target.files[0]
        }
        )
    } */

    handleOTPChange = otp => this.setState({ otp: otp });

    handleChange = event => {
        const mobileNo = event.target.value
        if (isNaN(mobileNo) || mobileNo.length > 10) return;
        this.setState({ mobileNo: mobileNo })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('values are submitted successfully : ' + this.state.mobileNo);
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    handleAadhar = e => {
        const num = e.target.value.replace(/\s+/g, '');
        if (isNaN(num) || num.length > 12) return;
        this.setState({ aadharNumber: num })
    }

    handleGSTIN = e => {
        const gstin = e.target.value;
        if (gstin.length > 15) return;
        this.setState({ gstin: gstin })
        // if (!validator.isValidGSTNumber( this.state.gstin)) return <FormSnackBar />
    }

    

    handleLocation = (location) => {
        this.setState({ location: location });
    }

    handlePlace = (place) => {
        this.setState({ place: place });
    }

    handleUseGPS = val => {
        this.setState({ useGPS: val })
    }



    toggleinup() {
        const color = "#f00";
        const black = '000000';
        const theme = createMuiTheme({
            palette: {
                common: { black: color, white: color },
                primary: { main: color, dark: color, light: color },
                text: { primary: black, secondary: black }
            }
        });

        if (this.state.activelog === 0) {
            const isDisabled = this.state.mobileNo.length !== 10;
            return (
                <>
                    <h3>GATS Charging Station</h3>
                    <form className='sign-in-form' onSubmit={this.handleSubmit} >
                        <MuiThemeProvider theme={theme}>
                            <TextField
                                autoFocus
                                fullWidth
                                value={this.state.mobileNo}
                                onChange={this.handleChange}
                                margin="normal"
                                id="input-with-icon-textfield"
                                label="Enter Phone Number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneRoundedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </MuiThemeProvider>
                        <Button
                            type='button'
                            variant="contained"
                            onClick={() => this.changeState(1)}
                            disabled={isDisabled}
                            fullWidth
                            color="primary"
                            style={{ margin: theme.spacing(3, 0, 2) }}
                        >Request OTP
                            </Button>
                    </form>
                </>
            )
        }

        else if (this.state.activelog === 1) {
            const isDisabled = this.state.otp.length < 4;
            const text = isDisabled ? "ENTER OTP" : "VERIFY AND PROCEED";
            return (
                <div className="otp-input-box">
                    <h4> Enter verification code </h4>
                    <OtpInput
                        value={this.state.otp}
                        onChange={this.handleOTPChange}
                        numInputs={4}
                        separator={<span> </span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle="otp-input"
                        focusStyle="focus-style"
                        containerStyle="otp-box-container"
                    />
                    <Button
                        className="otp-button"
                        disabled={isDisabled}
                        onClick={() => this.changeState(2)}
                        style={{ margin: theme.spacing(3, 0, 2) }}
                        fullWidth
                    >{text}</Button>
                </div>
            );
        }

        else if (this.state.activelog === 2) {
            const showAadhar = this.state.aadharNumber.replace(/(.{4})/g, '$1 ').trim();
            // 12AAACI1681G1Z0 : Use as a valid GSTIN
            return (
                <FirstForm
                    theme={theme}
                    showAadhar={showAadhar}
                    // isDisabled={isDisabled}
                    gstin={this.state.gstin}
                    handleGSTIN={this.handleGSTIN}
                    handleAadhar={this.handleAadhar}
                    aadharNumber={this.state.aadharNumber}
                    changeState={this.changeState}
                />
            )
        }

        else if (this.state.activelog === 3) {
            return (
                <div className="info-form">
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            label="Bank A/C Holder Name"
                            maxLength='100'
                            type="text"
                            autoFocus
                        />
                        <br />
                        <TextField
                            label="Bank A/C Number"
                            maxLength='30'
                            type="text"
                        />
                        <br />
                        <TextField
                            label="IFSC Code"
                            maxLength='30'
                            type="text"
                        />
                        <br />
                    </MuiThemeProvider>
                    <Button className="otp-button" onClick={() => this.changeState(4)}>SUBMIT</Button>
                </div>
            )
        } else if (this.state.activelog === 4) {
            return (
                <FileAndLocation
                    changeState={this.changeState}
                    handlePlace={this.handlePlace}
                    handleLocation={this.handleLocation}
                    place={this.state.place}
                    location={this.state.location}
                    handleGPS={this.handleGPS}
                    useGPS={this.state.useGPS}
                />
            )
        } else if (this.state.activelog === 5) {
            return (
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbTDD_FfveKWUS5YnpMAkqFM2G_iMNQmw`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `220px`, width: '300px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    location={this.state.location}
                    handleLocation={this.handleLocation}
                    changeState={this.changeState}
                    place={this.state.place}
                    handlePlace={this.handlePlace}
                    handleUseGPS={this.handleUseGPS}
                />
            )
        } else if (this.state.activelog === 6) {
            return (
                <FindLocation
                    theme={theme}
                    changeState={this.changeState}
                    handlePlace={this.handlePlace}
                    handleLocation={this.handleLocation}
                    place={this.state.place}
                    location={this.state.location}
                    handleUseGPS={this.handleUseGPS}
                />
            )
        } else if (this.state.activelog === 7) {
            return (
                <ChooseOptions changeState={this.changeState} />
            )
        } else if (this.state.activelog === 8) {
            return (
                <></ >
            )
        }
    }

    render() {
        return (
            <>
                <WebAppBar />
                <Container component="main" maxWidth="xs">
                    <div className="semi-container">
                        {this.toggleinup()}
                    </div>

                </Container>
                <div className="copyright">
                    <footer><Copyright /></footer>
                </div>
            </ >
        )
    }
}

export default Sign;