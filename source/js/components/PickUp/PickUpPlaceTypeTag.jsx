import React from 'react';
import PropTypes from 'prop-types';

const place_type_names = {
    'A': 'Airport',
    'C': 'City',
    'T': 'Station',
    'D': 'District',
};

const PickUpPlaceTypeTag = ({ place_type }) => {
    let label = 'Place';
    let tag_class = 'autocomplete-result__place-type-tag';
    const place_type_name = place_type_names[place_type];
    if (place_type_name) {
        label = place_type_name;
        tag_class += ` autocomplete-result__place-type-tag--${ place_type_name.toLowerCase() }`;
    }

    return (
        <div className={ tag_class }>{label}</div>
    );
};

PickUpPlaceTypeTag.propTypes = {
    place_type: PropTypes.string,
}

PickUpPlaceTypeTag.defaultProps = {
    place_type: '',
}

export default PickUpPlaceTypeTag;