import {applyMiddleware, createStore} from 'redux';
import reducerCounter from '../reducer';
import createSagaMiddleware from 'redux-saga';

import createLogger from 'redux-logger';
import {rootSaga} from '../saga';

const sagaMiddleware = createSagaMiddleware();


let store = createStore(reducerCounter, applyMiddleware(
    sagaMiddleware,
));

sagaMiddleware.run(rootSaga);

export default store;
