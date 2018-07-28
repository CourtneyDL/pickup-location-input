import React from 'react';
import PropTypes from 'prop-types';

const PickUpResult = ({ data }) => <div>{data}</div>;

PickUpResult.propTypes = {
    data: PropTypes.string,
}

PickUpResult.defaultProps = {
    data: ''
}

export default PickUpResult;