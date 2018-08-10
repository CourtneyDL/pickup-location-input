import React from 'react';
import PropTypes from 'prop-types';

import PickUpPlaceTypeTag from 'components/PickUp/PickUpPlaceTypeTag';

const PickUpResult = ({ data }) => {
    const { name, place_type, locality } = data;

    return (
        <li>
            <div className="autocomplete-result">
                { place_type &&
                    <PickUpPlaceTypeTag place_type={place_type} />
                }
                { name &&
                    <div className="pickup-location-result-detail">
                        <div className="pickup-location-result-name">{name}</div>
                        {locality && <div className="pickup-location-result-locality">{locality}</div>}
                    </div>
                }
            </div>
        </li>
    );
};

PickUpResult.propTypes = {
    data: PropTypes.object,
}

PickUpResult.defaultProps = {
    data: {}
}

export default PickUpResult;