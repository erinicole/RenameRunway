import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './products_reducer'
import shoppingCartItemReducer from './shopping_cart_reducer'
import itemsReducer from './item_reducer'


const entitiesReducer = combineReducers(
    
     {
          users: usersReducer,
          products: productReducer,
          shoppingCart: shoppingCartItemReducer,
          items: itemsReducer
     }

);

export default entitiesReducer;