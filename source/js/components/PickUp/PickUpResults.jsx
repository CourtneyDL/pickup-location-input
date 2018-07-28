import React from 'react';
import PropTypes from 'prop-types';

import PickUpResult from 'components/PickUp/PickUpResult';

const PickUpResults  = ({ search_performed, results }) => (
    <div className="pickup-location-results">
        { results.length === 0 && search_performed && <div className="no-results">No results found</div> }
        { 
            results.map((result,index) => 
                <PickUpResult key={index} data={result}/>
        )}
    </div>
);

PickUpResults.propTypes = {
    results: PropTypes.array
};

PickUpResults.defaultProps = {
    results: []
};

export default PickUpResults;