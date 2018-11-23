/** @function RootReducer
 * @description
 * The root reducer of an application that combines all airdata
 */

import { combineReducers } from 'redux';
import appReady from './reducerAppReady';
import notes from './reducerNotes';
import preferences from './reducerPreferences';
const rootReducers = combineReducers({
  appReady,
  notes,
  preferences,
});

export default rootReducers;
