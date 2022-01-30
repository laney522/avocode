import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'

const AvoCode = ({ Component }) => {
  return (
    <Component />
  )
};


AvoCode.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default AvoCode;