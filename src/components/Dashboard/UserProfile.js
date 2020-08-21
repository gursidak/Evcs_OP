import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export default function UserProfile() {
  return (
    <>
      <Grid container spacing={3}>
        <h4 style={{margin: '0 auto'}}>Shivam's EVCS Profile</h4>
        <Divider variant='middle' />
        <Grid item xs={12}>
          Name <br />
          Mobile No. <br />
          Email Address <br />
        </Grid>
        {/* Bank Account Details */}
        <Grid item xs={12}>
          GSTIN <br />
          Aadhar Number <br />
          File 1 <br />
          File 2 <br />
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
  )
}
