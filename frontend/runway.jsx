import React from 'react';
import ReactDOM from  'react-dom';
import configureStore from './store/store'
import { signin, logout} from './actions/session_actions'
import Root from './components/root'
import { fetchShoppingCartItems } from './actions/shopping_cart_item_actions'
import { fetchItems } from './actions/item_action'
import {fetchShoppingCartProducts} from './actions/product_actions'
import { fetchShortlistItems, deleteShortlistItem } from './actions/shortlist_item_action'
import { fetchShortlists, createShortlist, updateShortlist, deleteShortlist } from './actions/shortlist_action'




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
    window.fetchShoppingCartProducts = fetchShoppingCartProducts;
    window.fetchShoppingCartItems = fetchShoppingCartItems;
    window.fetchItems = fetchItems
    window.signin = signin;
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchShortlistItems = fetchShortlistItems
    window.deleteShortlistItem = deleteShortlistItem
    window.fetchShortlists = fetchShortlists
    window.createShortlist = createShortlist
    window.updateShortlist = updateShortlist
    window.deleteShortlist = deleteShortlist
    window.testingReviewsProducts = (arg) => {
        store.dispatch(fetchReviewsProducts(arg))
    };
    window.testingReviewsUsers = (arg) => {
        store.dispatch(fetchReviewsUsers(arg))
    };
    //testing

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root)
})