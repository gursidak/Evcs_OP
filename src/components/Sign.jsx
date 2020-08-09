import React, { Component } from 'react';
import './Css/App.css'
import { Button, Grid, Cell } from 'react-mdl';
import Carousel from './Carousel'
import LOGO from './logo.jpg'
import OtpInput from 'react-otp-input';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import FirstForm from './FirstForm';
import validator from 'gstin-validator';
import FileAndLocation from './FileAndLocation';
import FindLocation from './FindLocation'
// import FormSnackBar from './FormSnackBar'
import Map from './Map'

import './Sign.css';

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
            showWarning: false,
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
        if (isNaN(mobileNo)) return;
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

    handleFirstForm = (e) => {
        if (validator.isValidGSTNumber(this.state.gstin)) {
            this.changeState(3);
        } else {
            this.setState({ showWarning: true });
        }
    }

    handleLocation = (location) => {
        this.setState({ location: location });
    }

    handlePlace = (place) => {
        this.setState({ place: place });
    }

    handleUseGPS =  val => {
        this.setState({useGPS: val})
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
                <div>
                    <form className='sign-in-form' onSubmit={this.handleSubmit} >
                        <h3>GATS Charging Station</h3><br />
                        <div className='input-box'>
                            <i className='fa fa-phone'></i>
                            <input
                                type='tel'
                                minLength='10'
                                value={this.state.mobileNo}
                                onChange={this.handleChange}
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                maxLength='10'
                                placeholder='Enter your phone number'
                                autoFocus
                            ></input>
                            <Button
                                type='button'
                                id='submitphone'
                                onClick={() => this.changeState(1)}
                                disabled={isDisabled}
                            > <i className='fa fa-arrow-right' ></i>
                            </Button>
                        </div>
                    </form>
                </div>
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
                    />
                    <Button
                        className="otp-button"
                        disabled={isDisabled}
                        onClick={() => this.changeState(2)}
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
                    showWarning={this.state.showWarning}
                    handleGSTIN={this.handleGSTIN}
                    handleAadhar={this.handleAadhar}
                    handleFirstForm={this.handleFirstForm}
                    aadharNumber={this.state.aadharNumber}
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
        } else if (this.state.activelog === 6) {
            return (
                <Map />
            )
        }
    }

    render() {
        return (
            <div className="sign-box">
                <link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
                <div className='Sign'>
                    <header className='logo-header'>
                        <img src={LOGO} alt='GATS-logo' />
                        <div className='CompName'>
                            GATS SCS
                    </div>
                    </header>

                    <div className='Sign-content'>
                        <Grid className='main-grid'>
                            <Cell col={12}>
                                {this.toggleinup()}
                            </Cell>
                        </Grid>
                    </div>
                </div>
                <div className="slider">
                    <Carousel />
                </div>

            </div>
        )
    }
}

export default Sign;