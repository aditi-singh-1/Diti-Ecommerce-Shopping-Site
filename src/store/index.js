import  {createStore, combineReducers} from "redux"
import Product from "./Reducer/Product"
import CartReducer from "./Reducer/CartReducer"

const root = combineReducers({
    Product,
    CartReducer
});

const store = createStore(root);
export default store;