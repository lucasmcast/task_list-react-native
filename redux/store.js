/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 * File model searched in the redux-persist and react-redux documentation
 * @see https://github.com/rt2zz/redux-persist
 * @see https://redux.js.org/introduction/getting-started
 */

import { createStore } from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return {store, persistor}
}