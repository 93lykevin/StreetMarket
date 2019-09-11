import { combineReducers } from "redux";
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    users: usersReducer,
    products: productsReducer
});

