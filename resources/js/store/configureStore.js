import {createStore} from 'redux';
import {rootReducer} from "./state";

const configureStore = () => {
    return createStore(rootReducer, {});
}

export default configureStore;
