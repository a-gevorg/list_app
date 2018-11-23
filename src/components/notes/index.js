/** @function Notes
 * @description
 * Displays a list of notes.
 * It sends an event to retrieve a list of notes after the component has been initialized.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotes } from '../../store/actions';
import Note from './note';
import Loader from '../loader';

class Notes extends React.PureComponent {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    if (!this.props.notes) {
      return (<Loader/>);
    }
    if (!this.props.notes.length) {
      return (
        <h3 className="empty">you have not any notes</h3>
      );
    }

    return (
      <div>
        {
          this.props.notes.map(note => (
            <Note key={note.id} note={note} />
          ))
        }
      </div>
    );
  }
}
const mapStateToProps = state => (
  {
    notes: state.notes,
  }
);

export default connect(mapStateToProps, { fetchNotes })(Notes);

Notes.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  notes: PropTypes.any,
};
