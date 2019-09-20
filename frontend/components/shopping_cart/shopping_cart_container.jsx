import { connect } from 'react-redux';
import { fetchShoppingCartItems, deleteShoppingCartItem } from '../../actions/shopping_cart_item_actions'
import ShoppingCart from './shopping_cart';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
    const shoppingCartItems = Object.values(state.entities.shoppingCartItems);
    return ({
        shoppingCartItems: shoppingCartItems,
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems()),
        deleteShoppingCartItem: (id) => dispatch(deleteShoppingCartItem(id)),
        closeModal: () => dispatch(closeModal())

    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);