import { createStore, applyMiddleware,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'
import todoReducer from '../../reducers/todoReducer'
const sagaMiddleware = createSagaMiddleware()
// sagaMiddleware.run(rootSaga)
const rootReducer = combineReducers({
    todoReducer
})

const store = createStore(applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store


