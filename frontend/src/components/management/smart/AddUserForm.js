import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import {
    TextField,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button,
    makeStyles,
    Avatar,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import PasswordRules from '../../common/password/PasswordRules';
import PasswordField from '../../common/password/PasswordField';

import { addUser } from '../redux/userDuck';
import {
    regexEmail,
    isPasswordTooShort,
    ERROR_PASSWORD_LENGTH,
    passwordDoesNotContainACapitalLetter,
    ERROR_PASSWORD_CAPITAL_LETTER,
    passwordDoesNotContainANumber,
    ERROR_PASSWORD_NUMBER,
} from '../../../helpers/constants/index';

import { borderRadius } from '../../../helpers/constants/variables.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        paddingTop: 20,
        width: 500,
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: borderRadius,
    },
    text: {
        paddingBottom: 10,
        width: 400,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        width: 100,
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
    iconDef: {
        fontSize: 50,
    },
}));

const AddUserForm = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setErrorEmail('Email must be set.');
        } else if (!password) {
            setErrorPassword('Password must be set.');
        } else {
            dispatch(addUser(email, password)).then(() => props.closeAction());
        }
    };

    const onChangeEmail = (event) => {
        if (props.users.includes(event.target.value)) {
            setErrorEmail('Email already used');
        } else if (event.target.value.match(regexEmail)) {
            setErrorEmail('');
        } else {
            setErrorEmail('Email invalid');
        }
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        if (isPasswordTooShort(event.target.value)) {
            setErrorPassword(ERROR_PASSWORD_LENGTH);
        } else if (passwordDoesNotContainACapitalLetter(event.target.value)) {
            setErrorPassword(ERROR_PASSWORD_CAPITAL_LETTER);
        } else if (passwordDoesNotContainANumber(event.target.value)) {
            setErrorPassword(ERROR_PASSWORD_NUMBER);
        } else {
            setErrorPassword('');
        }
        setPassword(event.target.value);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <AccountCircleIcon className={classes.iconDef} />
                    </Avatar>
                }
                title="Add New User"
                titleTypographyProps={{ variant: 'h6', color: 'primary' }}
                subheader={<PasswordRules />}
            />
            <CardContent className={classes.cardContent}>
                <TextField
                    className={classes.text}
                    required
                    label="User email"
                    variant="outlined"
                    value={email}
                    error={!!errorEmail}
                    helperText={errorEmail}
                    onChange={onChangeEmail}
                    inputProps={
                        {'data-testid': 'email'}
                    }
                />
                <PasswordField 
                    value={password}
                    label="Password"
                    error={errorPassword}
                    onChange={onChangePassword}
                    testId='password'
                />
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={handleSubmit}
                    color="primary"
                    disabled={!!errorEmail || !!errorPassword}
                    className={classes.button}
                >
                    Add
                </Button>
                <Button
                    size="small"
                    onClick={props.closeAction}
                    color="secondary"
                    className={classes.button}
                >
                    Cancel
                </Button>
            </CardActions>
        </Card>
    );
};

AddUserForm.propTypes = {
    users: PropTypes.array.isRequired,
    closeAction: PropTypes.func.isRequired,
};

export default AddUserForm;
