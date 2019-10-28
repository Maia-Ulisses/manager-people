import {compose,combineReducers, createStore, applyMiddleware} from 'redux';
import userReducer from './reducers/user-reducer'
import createSagaMiddleware from 'redux-saga';
import sagaRoot from './sagas'

const allReducers = combineReducers({
    user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const allStoreEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(allReducers,allStoreEnhancers);

sagaMiddleware.run(sagaRoot);

export default store;