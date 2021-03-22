import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ AlertReducer }) =>
  AlertReducer !== null &&
  AlertReducer.length > 0 &&
  AlertReducer.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  AlertReducer: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    AlertReducer: state.AlertReducer,
  };
};

export default connect(mapStateToProps)(Alert);
