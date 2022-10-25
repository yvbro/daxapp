import React from 'react';

import { CircularProgress } from '@material-ui/core';

import classes from './common.module.scss';

const LoadingIndicator = () => {
    return (
        <div className={`${classes.centered} ${classes.loader}`}>
            <CircularProgress />
        </div>
    );
};

export default LoadingIndicator;