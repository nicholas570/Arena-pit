import React from 'react';
import Proptypes from 'prop-types';

function test({ text }) {
  return (
    <>
      <h3>{text}</h3>
    </>
  );
}

test.propTypes = {
  text: Proptypes.string.isRequired,
};

export default test;
