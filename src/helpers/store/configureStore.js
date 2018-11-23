/** @function configureStore
 * @description
 * this helper prepares storage configuration
 * we can sync storage with store using white and black list provider by redux
 * from here we call another helper to bootstrap the application
 */

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../../store/reducers/rootReducer';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { appReady } from '../../store/actions';
import Bootstrap from '../bootstrap';

export default function configureStore() {

  const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: [], // whitelist needed storage keys
    blacklist: [], // blacklist needed needed keys
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, promiseMiddleware)));
  // Do the app bootstrapping and inform store that application is ready to run
  // component will render it's children only when application is ready
  Bootstrap(store).then(() => store.dispatch(appReady()));
  return store;

}
