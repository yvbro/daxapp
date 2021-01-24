import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {performLogout} from '../redux/authDuck';

class Logout extends Component {
    componentDidMount () {
        this.props.performLogout();
    }

    render () {
        return <Redirect to="/rexa/login"/>;
    }
}

Logout.propTypes = {
    performLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            performLogout,
        },
        dispatch
    );
};

export default connect(null, mapDispatchToProps)(Logout);