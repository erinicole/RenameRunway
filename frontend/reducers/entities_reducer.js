import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './products_reducer'
import shoppingCartReducer from './shopping_cart_reducer'


const entitiesReducer = combineReducers(
    
     {
          users: usersReducer,
          products: productReducer,
          shoppingCart: shoppingCartReducer

     }

);

export default entitiesReducer;