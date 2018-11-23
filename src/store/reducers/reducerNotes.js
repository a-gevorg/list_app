import { ADD_NOTES, TOGGLE_ACTIVE_MODE, TOGGLE_EDIT_MODE, UPDATE_NOTE, DELETE_NOTE } from '../actions/types';

const getNewState = (state, key, payload) => state.map(note =>
  note.id === payload.id
    ? { ...note, [key]: payload[key] }
    : note
);

const notesReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_NOTES:
      if (!state) {
        return [...action.payload];
      }
      return [...action.payload, ...state];
    case TOGGLE_ACTIVE_MODE:
      return getNewState(state, 'activated', action.payload);
    case TOGGLE_EDIT_MODE:
      return getNewState(state, 'editMode', action.payload);
    case UPDATE_NOTE:
      return getNewState(state, 'description', action.payload);
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.payload);
    default:
      return state;
  }
};

export default notesReducer;
