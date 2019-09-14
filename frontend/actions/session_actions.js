import * as UserAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({

        type: RECEIVE_CURRENT_USER,
        currentUser

})

const logoutCurrentUser = () => ({
        type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({

        type: RECEIVE_SESSION_ERRORS,
        errors

})

export const joinnow = user => dispatch => (
    UserAPIUtil.joinnow(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => ( 
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const signin = user => dispatch => (
    UserAPIUtil.signin(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    UserAPIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);