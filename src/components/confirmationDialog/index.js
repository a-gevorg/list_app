
/** @function ConfirmationDialog
 * @description
 * This connected component show popup for confirmation to delete note. There
 * is posibility to cancel deleting process or confirm. this dialog will close after the action.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteNote, toggleConfirmationDialog } from '../../store/actions/index';

class ConfirmationDialog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleConfirmation(event) {
    if (event.target.dataset.type === 'ok') {
      this.props.deleteNote(this.props.preferences.selectedId);
    }

    this.props.toggleConfirmationDialog({
      showConfirmationDialog: false,
      selectedId: '',
    });
  }

  render() {
    const { showConfirmationDialog } = this.props.preferences;
    if (!showConfirmationDialog) {
      return null;
    }
    return (
      <div className='confirmation-dialog'>
        <div className="dialog-wrapper">
          <div>
            <div>
              <div className="dialog-content">
                <h2 className='description'>Please confirm to delete current note</h2>
                <button data-type="ok" className='ok-button' onClick={this.handleConfirmation}>Ok</button>
                <button data-type="cancel" className='cancel-button' onClick={this.handleConfirmation}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    preferences: state.preferences,
  }
);

export default connect(mapStateToProps, { deleteNote, toggleConfirmationDialog })(React.memo(ConfirmationDialog));

ConfirmationDialog.propTypes = {
  deleteNode: PropTypes.func.isRequired,
  preferences: PropTypes.object.isRequired,
  toggleConfirmationDialog: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
