import React, { Component } from 'react';
import './Css/App.css'
import { Button, Grid, Cell } from 'react-mdl';
import Carousel from './Carousel'
import LOGO from './logo.jpg'
import OtpInput from 'react-otp-input';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import FormSnackBar from './FormSnackBar'
import validator from 'gstin-validator';
import './Sign.css'

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
            showWarning: false
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
    }

    handleFirstForm = (e) => {
        // e.preventDefault();
        if (validator.isValidGSTNumber(this.state.gstin)) {
            this.changeState(2);
        } else {
            // this.setState({ showWarning: false });
            this.setState(() => { return { showWarning: true } });
        }
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
                                onClick={() => this.changeState(3)}
                                disabled={isDisabled}
                            > <i className='fa fa-arrow-right' ></i>
                            </Button>
                        </div>
                    </form>
                </div>
            )
        }

        else if (this.state.activelog === 3) {
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
                        onClick={() => this.changeState(1)}
                    >{text}</Button>
                </div>
            );
        }

        else if (this.state.activelog === 1) {
            const showAadhar = this.state.aadharNumber.replace(/(.{4})/g, '$1 ').trim();
            const isDisabled = this.state.gstin.length !== 15 || this.state.aadharNumber.length !== 12;
            // 12AAACI1681G1Z0 : Use as a valid GSTIN
            return (
                <div className="addVehicleInfo">
                    {validator.isValidGSTNumber(this.state.gstin) ? "YES" : "NO"}
                    {this.state.showWarning ? <FormSnackBar /> : ""}
                    <form className="info-form" >
                        <MuiThemeProvider theme={theme}>
                            <TextField
                                label="GSTIN Number"
                                maxLength='15'
                                type="text"
                                autoFocus
                                onChange={this.handleGSTIN}
                                value={this.state.gstin}
                            />
                            <br />
                            <TextField
                                label="Aadhar Number"
                                maxLength='12'
                                type="text"
                                onChange={this.handleAadhar}
                                value={showAadhar}
                            />
                            <br />
                        </MuiThemeProvider>
                        <Button
                            type="button"
                            className="otp-button"
                            disabled={isDisabled}
                            onClick={this.handleFirstForm}
                        >ADD INFO</Button>
                    </form>
                </div>
            )
        }

        else if (this.state.activelog === 2) {
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
                    <Button className="otp-button">SUBMIT</Button>
                </div>
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