import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducers from './user/user.reducer'
import CartReducer from './cart/cart.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducers,
    cart: CartReducer
})

export default persistReducer(
    persistConfig, rootReducer
)