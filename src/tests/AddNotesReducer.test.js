/** @function AddNoteReducerTest
 * @description
 * A reducer should return the new state after applying the action to the previous state,
 * and that's the behavior tested below.
 */

import reducer from '../store/reducers/reducerNotes';
import * as types from '../store/actions/types';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    null
  );
});

it('should handle ADD_NOTES', () => {
  expect(
    reducer([], {
      type: types.ADD_NOTES,
      payload: [{
        description: 'first note to add',
        id: 'first-hashing-generated_from_guid',
        editMode: false,
        activated: false,
      }],
    })
  ).toEqual([
    {
      description: 'first note to add',
      id: 'first-hashing-generated_from_guid',
      editMode: false,
      activated: false,
    },
  ]);
  expect(
    reducer(
      [
        {
          description: 'first note to add',
          id: 'first-hashing-generated_from_guid',
          editMode: false,
          activated: false,
        },
      ],
      {
        type: types.ADD_NOTES,
        payload: [{
          description: 'second note to add',
          id: 'second-hashing-generated_from_guid',
          editMode: false,
          activated: false,
        }],
      }
    )
  ).toEqual([
    {
      description: 'second note to add',
      id: 'second-hashing-generated_from_guid',
      editMode: false,
      activated: false,
    },
    {
      description: 'first note to add',
      id: 'first-hashing-generated_from_guid',
      editMode: false,
      activated: false,
    },
  ]);
});

it('should handle DELETE_NOTE', () => {
  expect(
    reducer(
      [
        {
          description: 'first note',
          id: 'first-note',
          editMode: false,
          activated: false,
        },
        {
          description: 'second note',
          id: 'second-note',
          editMode: false,
          activated: false,
        },
      ],
      {
        type: types.DELETE_NOTE,
        payload: 'second-note',
      }
    )
  ).toEqual([
    {
      description: 'first note',
      id: 'first-note',
      editMode: false,
      activated: false,
    },
  ]);
});

it('should handle UPDATE_NOTE', () => {
  expect(
    reducer(
      [
        {
          description: 'first note',
          id: 'first-note',
          editMode: false,
          activated: false,
        },
        {
          description: 'second note',
          id: 'second-note',
          editMode: false,
          activated: false,
        },
      ],
      {
        type: types.UPDATE_NOTE,
        payload: {
          id: 'first-note',
          description: 'updated first note description',
        },
      }
    )
  ).toEqual([
    {
      description: 'updated first note description',
      id: 'first-note',
      editMode: false,
      activated: false,
    },
    {
      description: 'second note',
      id: 'second-note',
      editMode: false,
      activated: false,
    },
  ]);
});

it('should handle TOGGLE_ACTIVE_MODE', () => {
  expect(
    reducer(
      [
        {
          description: 'first note',
          id: 'first-note',
          editMode: false,
          activated: false,
        },
        {
          description: 'second note',
          id: 'second-note',
          editMode: false,
          activated: false,
        },
      ],
      {
        type: types.TOGGLE_ACTIVE_MODE,
        payload: {
          id: 'second-note',
          activated: true,
        },
      }
    )
  ).toEqual([
    {
      description: 'first note',
      id: 'first-note',
      editMode: false,
      activated: false,
    },
    {
      description: 'second note',
      id: 'second-note',
      editMode: false,
      activated: true,
    },
  ]);
});

it('should handle TOGGLE_EDIT_MODE', () => {
  expect(
    reducer(
      [
        {
          description: 'first note',
          id: 'first-note',
          editMode: false,
          activated: false,
        },
        {
          description: 'second note',
          id: 'second-note',
          editMode: false,
          activated: false,
        },
      ],
      {
        type: types.TOGGLE_EDIT_MODE,
        payload: {
          id: 'first-note',
          editMode: true,
        },
      }
    )
  ).toEqual([
    {
      description: 'first note',
      id: 'first-note',
      editMode: true,
      activated: false,
    },
    {
      description: 'second note',
      id: 'second-note',
      editMode: false,
      activated: false,
    },
  ]);
});
