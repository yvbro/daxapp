import React from 'react';
import { PropTypes } from 'prop-types';

import { Modal } from '@material-ui/core';

import classes from './common.module.scss';

const RexaModal = (props) => (
    <Modal
        className={classes.modal}
        open={props.open}
        onClose={props.closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        {props.children}
    </Modal>
);

RexaModal.propTypes = {
    children: PropTypes.array,
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default RexaModal;
