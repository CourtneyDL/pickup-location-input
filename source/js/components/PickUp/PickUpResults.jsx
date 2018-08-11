import React from 'react';
import PropTypes from 'prop-types';

import PickUpResult from 'components/PickUp/PickUpResult';

const PickUpResults  = ({ search_performed, results }) => (
    <ul className="autocomplete-results autocomplete-results--pickup-location">
        { results.length === 0 && search_performed && 
            <li className="autocomplete-results__list-item">
                <div className="autocomplete-result autocomplete-result--no-result">No results found</div>
            </li> }
        { 
            results.map((result,index) => 
                <PickUpResult key={ index } data={ result }/>
        )}
    </ul>
);

PickUpResults.propTypes = {
    search_performed: PropTypes.bool,
    results: PropTypes.array,
};

PickUpResults.defaultProps = {
    search_performed: false,
    results: [],
};

export default PickUpResults;