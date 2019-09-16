import { connect } from 'react-redux';
import React from 'react';
import { signin, clearErrors } from '../../actions/session_actions'
import {Link} from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'signin',
        headerText: 'Sign in for a better experience',
        buttonText: 'SIGN IN',
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signin(user)),
        otherForm: (
            <button className='session-button' onClick={(e) => { 
                e.preventDefault();
                return( 
                    dispatch(openModal('joinnow')) 
                )}
            }>
                DON'T HAVE AN ACCOUNT? JOIN NOW
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)