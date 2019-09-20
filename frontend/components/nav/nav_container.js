import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
import { fetchShoppingCartItems } from '../../actions/shopping_cart_item_actions';
import Nav from './nav'

const mapStateToProps = ({ session, entities: { users } }) => {
    return ({
        currentUser: users[session.id]
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)