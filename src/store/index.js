import { createStore } from "redux";
import rootReducer from '../reducers';

const intitialState = {
    favorites: []
}

export default function configureStore() {
    return createStore(
        rootReducer,
        intitialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}