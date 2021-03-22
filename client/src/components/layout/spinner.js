import React, { Fragment } from 'react';
import loader from './spin.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={loader}
        style={{
          width: '100px',
          margin: 'auto',
          display: 'block',
        }}
        alt='Loading...'
      />
    </Fragment>
  );
};

export default Spinner;
