# EVCS Operator App

An App for the *frontend* of the operator of an EVCS to register and maintain an EVCS.

## Features
1. Profile: A profile containing Personal Details, Bank A/C details, Location of the operator, with option to edit and update.
2. JavaScript validation while submitting the details (Email ID, GSTIN, Mobile Number) first and subsequent times. 
3. Online and Offline status for the EVCS.
4. Past and Upcoming transactions, and report of recent transactions.
5. Option to Login via OTP or password (Backend yet to be implemented).
6. Fast, responsive and modern-looking UI.

## Libraries Used:
1. [react-geocode](https://www.npmjs.com/package/react-geocode):  to transform a description of a location (i.e. street address, town name, etc.) into geographic coordinates (i.e. latitude and longitude) and vice versa.
2. [react-google-maps](https://www.npmjs.com/package/react-google-maps): a set of React components wrapping the underlying [Google Maps JavaScript API v3](https://developers.google.com/maps/documentation/javascript/) instances.
3. [react-otp-input](https://www.npmjs.com/package/react-otp-input): A fully customizable, one-time password input component for the web built with React.
4. [react-places-autocomplete](https://www.npmjs.com/package/react-places-autocomplete): A React component to build a customized UI for Google Maps Places Autocomplete.
5. [email-validator](https://www.npmjs.com/package/email-validator): A simple module to validate an e-mail address
6. [gstin-validator](https://www.npmjs.com/package/gstin-validator): -   Validates GSTIN number for length (15 digits), format (State code, PAN, Entity Number, Z, Checksum) and checksum.
7. [recharts](https://www.npmjs.com/package/recharts): a *Redefined* chart library built with [React](https://facebook.github.io/react/) and [D3](http://d3js.org/).
8.  [uniqid](https://www.npmjs.com/package/uniqid): A Unique *Hexatridecimal* ID generator.

## Starting the app
1. Open terminal, `cd` to your fav *Projects* folder and type: ```git clone https://github.com/shivamjjha/Evcs_OP.git```

2. Switch to the Project's directory: ```cd EVCS_OP```
3. Install Dependencies: ```npm i```
4. Start the hot-reloading server: ```npm start```
5. This will serve this project at [http://localhost:3000/](http://localhost:3000/) (by default).
6. To reflect changes in the project, edit the required files and save.

## Sidenotes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


1. `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

2. `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

3.  `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
