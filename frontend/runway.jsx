import React from 'react';
import ReactDOM from  'react-dom';
import configureStore from './store/store'
import { signin, logout} from './actions/session_actions'
import Root from './components/root'
import { fetchShoppingCartItems } from './actions/shopping_cart_item_actions'
import { fetchItems } from './actions/item_action'


document.addEventListener('DOMContentLoaded', () => {
    let store
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else { 

    store = configureStore();
    }
    //testing
    window.fetchShoppingCartItems = fetchShoppingCartItems;
    window.fetchItems = fetchItems
    window.signin = signin;
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //testinng

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root)
})