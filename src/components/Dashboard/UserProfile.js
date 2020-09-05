import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MobileNumber from "../MobileNumber";
import FirstForm from '../FirstForm';

export default function UserProfile({
  state,
  theme,
  handleChange,
  handleSubmit,
  changeState,
  setProfileUpdateToTrue,
  handleEmail,
  handleName,
  showAadhar,
  handleGSTIN,
  handleAadhar,
  
}) {
  return (
    <>
      <Grid container spacing={3}>
        {/* <h3 style={{ margin: "0 auto" }}>Shivam's Profile</h3> */}
        {/* {console.log(`name: ${state.name}`)} */}
        <Divider variant="middle" />
        <Grid item xs={12}>
          <MobileNumber
            // state={state}
            theme={theme}
            mobileNo={state.mobileNo}
            handleChange={handleChange}
            login={state.login}
            handleSubmit={handleSubmit}
            changeState={changeState}
            activelog={state.activelog}
            profileUpdated={state.profileUpdated}
            setProfileUpdateToTrue={setProfileUpdateToTrue}
            email={state.email}
            handleEmail={handleEmail}
            name={state.name}
            handleName={handleName}
            onProfilePage={state.onProfilePage}
          />
        </Grid>
        {/* Bank Account Details */}
        <hr />
        <Grid item xs={12}>
          <FirstForm
            theme={theme}
            showAadhar={showAadhar}
            gstin={state.gstin}
            handleGSTIN={handleGSTIN}
            handleAadhar={handleAadhar}
            aadharNumber={state.aadharNumber}
            changeState={changeState}
            onProfilePage={state.onProfilePage}
          />
        </Grid>
        <Grid item xs={12}>
          Bank A/C Holder Name <br />
          Bank A/C Number <br />
          IFSC Code
        </Grid>
        <Grid item xs={12}>
          Location Details
        </Grid>
        <Grid item xs={12}>
          Charger Details
        </Grid>
      </Grid>
    </>
  );
}
