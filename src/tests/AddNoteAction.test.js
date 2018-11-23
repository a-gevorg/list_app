/** @function AddNoteActionTest
 * @description
 * In Redux, action creators are functions which return plain objects. When testing action creators,
 * we want to test whether the correct action creator was called and also whether the right action was returned.
 */

import * as actions from '../store/actions';
import * as types from '../store/actions/types';
import guid from '../helpers/generateUniqId';

it('should create an action to add a new note', () => {
  const note = {
    id: guid(),
    description: 'add test note',
    editMode: false,
    activated: false,
  };
  const expectedAction = {
    type: types.ADD_NOTES,
    payload: [note],
  };
  expect(actions.addNotes([note])).toEqual(expectedAction);
});
