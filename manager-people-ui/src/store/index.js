import {compose,combineReducers, createStore, applyMiddleware} from 'redux';
import userReducer from './reducers/user-reducer'
import modalReducer from './reducers/modal-reducer'
import createSagaMiddleware from 'redux-saga';
import sagaRoot from './sagas'

const allReducers = combineReducers({
    user: userReducer,
    modal:modalReducer,
});

const sagaMiddleware = createSagaMiddleware();

const allStoreEnhancers = compose(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(allReducers,allStoreEnhancers);

sagaMiddleware.run(sagaRoot);

export default store;