import { connect } from 'react-redux';
import React from 'react';
import { signin } from '../../actions/session_actions'
import {Link} from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'signin',
        headerText: 'Sign in for a better experience',
        buttonText: 'SIGN IN',
        endLink: <Link to="/joinnow">DON'T HAVE AN ACCOUNT? JOIN NOW</Link>
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signin(user)),
        otherForm: (
            <button onClick={(e) => { 
                e.preventDefault();
                return( 
                    dispatch(openModal('joinnow')) 
                )}
            }>
                DON'T HAVE AN ACCOUNT? JOIN NOW
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)