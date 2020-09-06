import React, { Component } from "react";
import "./Css/App.css";
// import { Button } from 'react-mdl';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import OtpInput from "react-otp-input";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import FirstForm from "./FirstForm";
import FileAndLocation from "./FileAndLocation";
import FindLocation from "./FindLocation";
import WrappedMap from "./Map";
import ChooseOptions from "./ChooseOptions";
import WebAppBar from "./WebAppBar";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import WaitingRoom from "./WaitingRoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Footer from "./Footer";
import Dashboard from "../components/Dashboard/Dashboard";
import BankingDetails from "./BankingDetails";
import TypeOfChargers from "./TypeOfChargers";
import MobileNumber from "./MobileNumber";
import "./Sign.css";

const color = "#f00";
const black = "#000000";
const theme = createMuiTheme({
  palette: {
    common: { black: color, white: color },
    primary: { main: color, dark: color, light: color },
    text: { primary: black, secondary: black },
  },
});

class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activelog: 0,
      mobileNo: "+919811921298",
      otp: "",
      aadharNumber: "291929129122",
      gstin: "12AAACI1681G1Z0",
      place: "East Vinod Nagar, Delhi",
      location: {
        lat: "",
        lng: "",
      },
      aadharUIM: null,
      gstinFile: null,
      useGPS: true,
      accountHolder: "Shivam Jha",
      accountNumber: "1212121212",
      ifsc: "J1j3jsjJ1j1",
      fileWarning: false,
      // login: this.props.location.state.login,
      name: "",
      email: "",
      profileUpdated: false,
      onProfilePage: false,
      chargers: {
        a: true,
        b: false,
        c: false,
        d: false
      }
    };
  }

  changeState = activeId => {
    this.setState({ activelog: activeId });
  };

  handleOTPChange = otp => this.setState({ otp: otp });

  handleChange = e => {
    const mobileNo = e.target ? e.target.value : e;
    if (isNaN(mobileNo)) return;
    this.setState({ mobileNo: mobileNo });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("values are submitted successfully : " + this.state.mobileNo);
  };

  submitForm = e => {
    e.preventDefault();
  };

  handleAadhar = e => {
    const temp = e.target ? e.target.value : e;
    const num = temp;
    if (isNaN(num) || num.length > 12) return;
    this.setState({ aadharNumber: num });
  };

  handleGSTIN = e => {
    const temp = e.target ? e.target.value : e;
    const gstin = temp.toUpperCase().replace(/\s/g, "");
    if (gstin.length > 15) return;
    this.setState({ gstin: gstin });
  };

  handleName = e => {
    const name = e.target ? e.target.value : e;
    // console.log(name);
    this.setState({ name: name });
  };

  handleEmail = e => {
    const email = e.target ? e.target.value : e;
    this.setState({ email: email });
  };

  handleLocation = location => {
    this.setState({ location: location });
  };

  handlePlace = place => {
    this.setState({ place: place });
  };

  handleUseGPS = val => {
    this.setState({ useGPS: val });
  };

  handleAccountNumber = e => {
    const temp = e.target ? e.target.value : e;
    const accountNumber = temp.replace(/\s/g, "");
    if (accountNumber.length > 20) return;
    this.setState({ accountNumber: accountNumber });
  };

  handleAccountHolder = e => {
    const temp = e.target ? e.target.value : e;
    const accountHolder = temp.replace(/[^a-zA-Z ]/g, "");
    if (accountHolder.length > 50) return;
    this.setState({ accountHolder: accountHolder });
  };

  handleifsc = e => {
    const temp = e.target ? e.target.value : e;
    const ifsc = temp.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    if (ifsc.length > 11) return;
    this.setState({ ifsc: ifsc });
  };

  handleFile = e => {
    const file = e.target.files[0];
    const type = file.type;
    if (
      type === "application/pdf" ||
      type === "image/jpeg" ||
      type === "image/jpg"
    ) {
      this.setState({ fileWarning: false });
      this.setState({ [e.target.id]: file });
    } else this.setState({ fileWarning: true });
  };

  setProfileUpdateToTrue = () => {
    this.setState({ profileUpdated: true });
  };

  handleCharger = e => {
    if (this.state.onProfilePage) {
      this.setState({chargers: e});
    } else {
      const temp = e.target ? e.target.checked : e;
      const id = e.target.id;
      console.log('event', e);
      this.setState(prevState => ({
        chargers: {                   // object that we want to update
            ...prevState.chargers,    // keep all other key-value pairs
            [id]: temp       // update the value of specific key (charger)
        }
    }));
    }
  }

  toggleinup() {
    if (this.state.activelog === 0) {
      return (
        <MobileNumber
          theme={theme}
          mobileNo={this.state.mobileNo}
          handleChange={this.handleChange}
          login={this.state.login}
          handleSubmit={this.handleSubmit}
          changeState={this.changeState}
          activelog={this.state.activelog}
          onProfilePage={this.state.onProfilePage}
          profileUpdated={this.state.profileUpdated}
          setProfileUpdateToTrue={this.setProfileUpdateToTrue}
        />
      );
    } else if (this.state.activelog === 1) {
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
            onClick={() => {
              this.state.login ? this.changeState(10) : this.changeState(2);
            }}
            fullWidth
            variant="contained"
            style={{ margin: theme.spacing(3, 0, 2) }}
          >
            {text}
          </Button>
        </div>
      );
    } else if (this.state.activelog === 2) {
      const showAadhar = this.state.aadharNumber
        .replace(/(.{4})/g, "$1 ")
        .trim();
      // 12AAACI1681G1Z0 : Use as a valid GSTIN
      return (
        <FirstForm
          theme={theme}
          showAadhar={showAadhar}
          gstin={this.state.gstin}
          handleGSTIN={this.handleGSTIN}
          handleAadhar={this.handleAadhar}
          aadharNumber={this.state.aadharNumber}
          changeState={this.changeState}
          onProfilePage={this.state.onProfilePage}
        />
      );
    } else if (this.state.activelog === 3) {
      const disabled = !(
        this.state.accountHolder &&
        this.state.accountNumber &&
        this.state.ifsc.length >= 11
      );
      const onClick = () => {
        this.setState({ accountHolder: this.state.accountHolder.trim() });
        this.changeState(4);
      };
      return (
        <>
          <BankingDetails
            theme={theme}
            disabled={disabled}
            accountHolder={this.state.accountHolder}
            ifsc={this.state.ifsc}
            accountNumber={this.state.accountNumber}
            handleName={this.handleAccountHolder}
            handleAccountNumber={this.handleAccountNumber}
            handleifsc={this.handleifsc}
            setState={this.setState}
            changeState={this.changeState}
            onProfilePage={this.state.onProfilePage}
            onClick={onClick}
            name={this.state.accountHolder}
          />
        </>
      );
    } else if (this.state.activelog === 4) {
      return (
        <FileAndLocation
          changeState={this.changeState}
          theme={theme}
          handleFile={this.handleFile}
          fileWarning={this.state.fileWarning}
          aadharUIM={this.state.aadharUIM}
          gstinFile={this.state.gstinFile}
        />
      );
    } else if (this.state.activelog === 5) {
      return (
        <>
          <h3>Confirm Location</h3>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbTDD_FfveKWUS5YnpMAkqFM2G_iMNQmw`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `50%`,
                  width: "95%",
                  position: "absolute",
                  marginTop: "25%",
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
            location={this.state.location}
            handleLocation={this.handleLocation}
            changeState={this.changeState}
            place={this.state.place}
            handlePlace={this.handlePlace}
            useGPS={this.state.useGPS}
            handleUseGPS={this.handleUseGPS}
          />
        </>
      );
    } else if (this.state.activelog === 6) {
      return (
        <FindLocation
          theme={theme}
          changeState={this.changeState}
          handlePlace={this.handlePlace}
          handleLocation={this.handleLocation}
          place={this.state.place}
          location={this.state.location}
          useGPS={this.state.useGPS}
          handleUseGPS={this.handleUseGPS}
          aadharUIM={this.state.aadharUIM}
          gstinFile={this.state.gstinFile}
        />
      );
    } else if (this.state.activelog === 7) {
      return (
        <ChooseOptions
          changeState={this.changeState}
          theme={theme}
          place={this.state.place}
          location={this.state.location}
          onProfilePage={this.state.onProfilePage}
        />
      );
    } else if (this.state.activelog === 8) {
      return <WaitingRoom changeState={this.changeState} />;
    } else if (this.state.activelog === 9) {
      return (
        <TypeOfChargers
          theme={theme}
          changeState={this.changeState}
          onProfilePage={this.state.onProfilePage}
          chargers={this.state.chargers}
          handleCharger={this.handleCharger}
        />
      );
    } else if (this.state.activelog === 10) {
      const showAadhar = this.state.aadharNumber
        .replace(/(.{4})/g, "$1 ")
        .trim();
      !this.state.onProfilePage && this.setState({ onProfilePage: true });

      const disabled = !(
        this.state.accountHolder &&
        this.state.accountNumber &&
        this.state.ifsc.length >= 11
      );

      const onClick = () => {
        this.setState({ accountHolder: this.state.accountHolder.trim() });
        this.changeState(4);
      };
      return (
        <Dashboard
          state={this.state}
          theme={theme}
          disabled={disabled}
          onClick={onClick}
          changeState={this.changeState}
          handleAadhar={this.handleAadhar}
          // handleAccountNumber
          handleChange={this.handleChange}
          // handleFile
          handleGSTIN={this.handleGSTIN}
          // handleLocation
          // handleName
          // handleOTPChange
          // handlePlace
          handleSubmit={this.handleSubmit}
          // handleUseGPS
          // handleifsc
          onProfilePage={this.state.onProfilePage}
          setProfileUpdateToTrue={this.setProfileUpdateToTrue}
          handleEmail={this.handleEmail}
          handleName={this.handleName}
          showAadhar={showAadhar}
          handleAccountHolder={this.handleAccountHolder}
          handleAccountNumber={this.handleAccountNumber}
          handleifsc={this.handleifsc}
          setState={this.setState}
          handleLocation={this.handleLocation}
          handlePlace={this.handlePlace}
          handleUseGPS={this.handleUseGPS}
          handleCharger={this.handleCharger}
        />
      );
    }
  }

  render() {
    return (
      <>
        {this.state.activelog < 10 ? (
          <div>
            <WebAppBar />
            <Container component="main" maxWidth="xs">
              <div className="semi-container">{this.toggleinup()}</div>
            </Container>
            <div className="copyright">
              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        ) : (
          <>{this.toggleinup()}</>
        )}
      </>
    );
  }
}

export default Sign;
