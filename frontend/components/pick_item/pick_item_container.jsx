import { connect } from 'react-redux';
import PickItemForm from './pick_item';
import { fetchItems } from '../../actions/item_action';
import { openModal } from '../../actions/modal_actions';


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
        fetchItems: () => dispatch(fetchItems()),
        openModal: modal => dispatch(openModal(modal))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(PickItemForm);