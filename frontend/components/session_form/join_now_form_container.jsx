import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { joinnow } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'joinnow',
        switchLink: <Link to="/signin">ALREADY HAVE AN ACCOUT? SIGN IN.</Link>,
        month: '',
        day: '',
        year: ''

    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(joinnow(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)