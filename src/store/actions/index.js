import {
  APP_READY,
  ADD_NOTES,
  TOGGLE_ACTIVE_MODE,
  TOGGLE_EDIT_MODE,
  UPDATE_NOTE,
  DELETE_NOTE,
  TOGGLE_CONFIRMATION_DIALOG,
} from './types';
import notes from '../../helpers/notes';

export const appReady = () => (
  {
    type: APP_READY,
  }
);

export const addNotes = payload => (
  {
    type: ADD_NOTES,
    payload,
  }
);

export const toggleActiveNote = payload => (
  {
    type: TOGGLE_ACTIVE_MODE,
    payload,
  }
);

export const toggleEditMode = payload => (
  {
    type: TOGGLE_EDIT_MODE,
    payload,
  }
);
export const saveDescription = payload => (
  {
    type: UPDATE_NOTE,
    payload,
  }
);

export const deleteNote = payload => (
  {
    type: DELETE_NOTE,
    payload,
  }
);

export const toggleConfirmationDialog = payload => {
  return {
    type: TOGGLE_CONFIRMATION_DIALOG,
    payload,
  };
};

export const fetchNotes = () => dispatch => {
  setTimeout(function() {
    dispatch(addNotes(notes));
  }, 2000);
};
