import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  AuthReducer: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  AuthReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    AuthReducer: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
