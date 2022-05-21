import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import { extractPayload } from '../../../store/slices/auth/authAction';
import { login } from '../../../store/slices/auth/authSlice';

function OAuth2RedirectHandler() {
    const location = useLocation();

    const getUrlParameter = (name: string) => {
        name = name.replace(/[\]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(location.search);
        return results === null
            ? ''
            : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const renderOAuth = () => {
        const token = getUrlParameter('token');
        const error = getUrlParameter('error');

        if (token) {
            login(extractPayload(token));
            return (
                <Redirect
                    to={{
                        pathname: '/rexa/dashboard',
                        state: { from: location },
                    }}
                />
            );
        } else {
            return (
                <Redirect
                    to={{
                        pathname: '/rexa/login',
                        state: {
                            from: location,
                            error: error,
                        },
                    }}
                />
            );
        }
    };

    return renderOAuth();
}

export default OAuth2RedirectHandler;