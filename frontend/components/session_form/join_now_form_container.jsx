import { connect } from 'react-redux';
import React from 'react';
import { joinnow } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'joinnow',
        headerText: (<span>Buy Less. Wear More. {<br />} 20% Off or $80 Off Unlimited Trial' </span>),
        buttonText: 'UNLOCK MY OFFER',
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(joinnow(user)),
        otherForm: (
            <button className='session-button' onClick={(e) => {
                e.preventDefault();
                return (
                    dispatch(openModal('signin'))
                )
            }
            }>
                ALREADY HAVE AN ACCOUT? SIGN IN
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)