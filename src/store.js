import {createStore,applyMiddleware,compose} from 'redux'
//import {compose} from 'redux-devtools-extension'
import logger from 'redux-thunk'
import rootReducer from './reducers/index'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const initialState ={}; 
const middleware = [logger];
const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
 export  const store = createStore(
    persistedReducer, initialState,
    compose(applyMiddleware(...middleware))
   
)

export  const persistor= persistStore(store)




