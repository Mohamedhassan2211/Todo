import {createStore,combineReducers ,applyMiddleware} from 'redux'      
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {TodoReducer} from './reducer/Todoreducers';

const reducer = combineReducers({
    Todo: TodoReducer,
});

const intialState = {};

const middleware = [thunk];

const sotre= createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default sotre;