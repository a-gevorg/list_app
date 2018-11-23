/** @function App
 * @description
 * The main component that reflects our application after receiving readiness information.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './assets/sass/main.scss';
import Loader from './components/loader';
import Notes from './components/notes';
import AddNote from './components/notes/addNote';
import ConfirmationDialog from './components/confirmationDialog';

export class App extends React.PureComponent {
  render() {
    if (!this.props.appReady) {
      return (
        <Loader />
      );
    }
    return (
      <div className="App">
        <AddNote />
        <Notes />
        <ConfirmationDialog />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    appReady: state.appReady,
  }
);

export default connect(mapStateToProps)(App);

App.propTypes = {
  appReady: PropTypes.bool.isRequired,
};
