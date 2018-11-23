import { TOGGLE_CONFIRMATION_DIALOG } from '../actions/types';

const preferencesReducer = (state = { showConfirmationDialog: false, selectedId: '' }, action) => {
  switch (action.type) {
    case TOGGLE_CONFIRMATION_DIALOG:
      return {
        showConfirmationDialog: action.payload.showConfirmationDialog,
        selectedId: action.payload.selectedId,
      };
    default:
      return state;
  }
};

export default preferencesReducer;
