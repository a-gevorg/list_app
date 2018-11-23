/** @function AddNote
 * @description
 * This container is responsible for adding new note. The new note will be added of the top of notes list.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNotes } from '../../store/actions';
import guid from '../../helpers/generateUniqId';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.state = {
      description: '',
    };
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  };

  addNote(event) {
    event.preventDefault();

    if (!this.state.description.trim()) {
      return;
    }

    this.props.addNotes([{
      id: guid(),
      description: this.state.description,
      editMode: false,
      activated: false,
    }]);

    this.setState({ description: '' });
  };

  render() {
    return (
      <form onSubmit={this.addNote}>
        <input type="text" value={this.state.description} onChange={this.onDescriptionChange} />
        <button type="submit">
          Add Note
        </button>
      </form>
    );
  }
};

export default connect(null, { addNotes })(AddNote);

AddNote.propTypes = {
  addNotes: PropTypes.func.isRequired,
};
