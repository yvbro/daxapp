import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash/get';

import { Grid, Card, Button, TextField, makeStyles } from '@material-ui/core';

import { performLogin } from '../redux/authDuck';
import SocialLogin from '../dumb/SocialLogin';
import { ACCESS_TOKEN } from '../../constants';

import rexaLogo from "../../assets/rexa-logo-svg.png";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    },
    card: {
        width: 400,
        height: 500,
        borderRadius: '16px',
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        margin: theme.spacing(1),
        width: 350,
    },
    button: {
        width: 350,
        margin: theme.spacing(1),
    },
    imgLogo: {
        width: 230,
        height: 230,
    }
}));

// eslint-disable-next-line
const regexEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

const LoginPage = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(performLogin(email, password))
            .then((response) => {
                toast.info('Welcome to Rexa');
                localStorage.setItem(
                    ACCESS_TOKEN,
                    `Bearer ${response.value.data.accessToken}`
                );
                history.push('/rexa/dashboard');
            })
            .catch((error) => {
                let errorMessage = _get(error, 'response.data.message', null);
                if (!errorMessage || errorMessage !== "User is disabled") {
                    errorMessage = "Invalid username or password";
                }
                toast.error(`Unsuccessful login attempt: ${errorMessage}`);
            });
    };

    const onChangeEmail = (event) => {
        if (event.target.value.match(regexEmail)) {
            setEmail(event.target.value);
            setErrorEmail('');
        } else {
            setErrorEmail('Email invalid');
        }
    };

    if (location.state && location.state.error) {
        toast.error('This account is not allowed to sign in or the user has been disabled.');
        location.state.error = null;
    }

    if (props.authenticated) {
        return (
            <Redirect
                to={{
                    pathname: '/rexa/dashboard',
                    state: { from: location },
                }}
            />
        );
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}
        >
            <Grid item xs={3}>
                <Card className={classes.card}>
                    <div className={classes.center}>
                        <img className={classes.imgLogo} src={rexaLogo} alt="ReXA Logo"/>
                    </div>
                    <form
                        className={classes.center}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            id="outlined-basic"
                            type="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            error={!!errorEmail}
                            helperText={errorEmail}
                            onChange={onChangeEmail}
                            className={classes.text}
                        />
                        <TextField
                            id="filled-password-input"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                            className={classes.text}
                        />
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            disabled={!!errorEmail}
                            className={classes.button}
                        >
                            Sign in
                        </Button>
                        <SocialLogin />
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

LoginPage.propTypes = {
    authenticated: PropTypes.bool.isRequired,
};

export default LoginPage;
