import { connect } from 'react-redux';
import PickItemForm from './pick_item';
import { fetchItems } from '../../actions/item_action';
import { openModal } from '../../actions/modal_actions';
import { createShoppingCartItem } from '../../actions/shopping_cart_item_actions';


const mapStateToProps = state => {
    const items = Object.values(state.entities.items);
    const userId = state.session.id
    const user = state.entities.users[userId]
    return ({
        items: items,
        user: user
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchItems: (productId) => dispatch(fetchItems(productId)),
        openModal: modal => dispatch(openModal(modal)),
        createShoppingCartItem: shoppingCartiItem => dispatch(createShoppingCartItem(shoppingCartiItem)),

    });
}

export default connect(mapStateToProps, mapDispatchToProps)(PickItemForm);