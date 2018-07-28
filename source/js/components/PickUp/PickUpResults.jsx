import React from 'react';
import PropTypes from 'prop-types';

import PickUpResult from 'components/PickUp/PickUpResult';

const PickUpResults  = ({ results }) => (
    <div>
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