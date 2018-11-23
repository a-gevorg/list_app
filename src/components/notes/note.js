/** @function Note
 * @description
 * A single component “note” that connects with redux store.
 * user can edit, save, cancel or delete 'note' from here
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleActiveNote, toggleEditMode, saveDescription, toggleConfirmationDialog } from '../../store/actions';

class Note extends React.PureComponent {
  constructor(props) {
    super(props);
    this.processToDeleteNote = this.processToDeleteNote.bind(this);
    this.state = {
      description: props.note.description,
    };
  }

  processToDeleteNote() {
    this.props.toggleConfirmationDialog({
      showConfirmationDialog: true,
      selectedId: this.props.note.id,
    });
  }

  render() {
    const { note: { id, description, activated, editMode }, toggleActiveNote, toggleEditMode, saveDescription } = this.props;
    return (
      <div className="container">
        <label>
          <input id="checkbox" type="checkbox" checked={activated} onChange={() => toggleActiveNote({ id, activated: !activated })} />
          <span/>
        </label>
        <input type="text" value={this.state.description} disabled={!editMode} onChange={event => this.setState({ description: event.target.value })} />
        <button className='edit-button' onClick={() => toggleEditMode({ id, editMode: true })}/>
        {
          editMode && (
            <React.Fragment>
              <button className='save-button' onClick={() => { saveDescription({ id, description: this.state.description }); toggleEditMode({ id, editMode: false }); }}/>
              <button className='cancel-button' onClick={() => { this.setState({ description }); toggleEditMode({ id, editMode: false }); }}/>
            </React.Fragment>
          )
        }
        <button className='delete-button' onClick={this.processToDeleteNote}/>
      </div>
    );
  }
}

export default connect(null, { toggleActiveNote, toggleEditMode, saveDescription, toggleConfirmationDialog })(React.memo(Note));

Note.propTypes = {
  note: PropTypes.object.isRequired,
  toggleConfirmationDialog: PropTypes.func.isRequired,
  toggleActiveNote: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  saveDescription: PropTypes.func.isRequired,
};
