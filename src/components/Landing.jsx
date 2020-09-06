import React, { Component } from 'react';
// import './Logo.css'
import { Redirect } from 'react-router-dom'
import WebAppBar from './WebAppBar';
import Container from "@material-ui/core/Container";
import Footer from './Footer'
import { createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import './Css/App.css'


const color = "#f00";
const black = '#000000';
const theme = createMuiTheme({
    palette: {
        common: { black: color, white: color },
        primary: { main: color, dark: color, light: color },
        text: { primary: black, secondary: black }
    }
});

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            login: true
        }
    }
    login = () => {
        this.setState({redirect: true, login: true});
    }

    signup = () => {
        this.setState({redirect: true, login: false})
    }


    render() {
        return (
            <>
                <WebAppBar />
                <Container component="main" maxWidth="xs">
                    <div className="semi-container">
                        <div className="sign-in-form">
                            <Button
                                fullWidth
                                variant="contained"
                                style={{ margin: theme.spacing(3, 0, 2) }}
                                onClick={this.login}
                            >LOGIN</Button>
                            <Button
                                fullWidth
                                variant="contained"
                                style={{ margin: theme.spacing(3, 0, 2) }}
                                onClick={this.signup}
                            >SIGNUP</Button>
                        </div>
                    </div>
                </Container>
                <div className="copyright">
                    <footer><Footer /></footer>
                </div>
                {
                    this.state.redirect &&
                    <Redirect to={{
                        pathname: '/sign',
                        state: { login: this.state.login }
                    }}
                    />
                }
            </>
        )
    }
}

export default Landing;