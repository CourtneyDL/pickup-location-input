import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PickUpResult from 'components/App/PickUpResult';

const PickUpResults  = ({ results }) => (
    <div className={results.length === 0 ? 'hidden' : undefined}>
        {results.map((result,index) => <PickUpResult key={index} data={result}/>)}
    </div>
);

PickUpResults.propTypes = {
    results: PropTypes.array
};

PickUpResults.defaultProps = {
    results: []
};

export default PickUpResults;