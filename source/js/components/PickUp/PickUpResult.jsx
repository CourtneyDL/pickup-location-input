import React from 'react';
import PropTypes from 'prop-types';

const PickUpResult = ({ data }) => {
    const { name, place_type, locality } = data;

    return (
        <div className="pickup-location-result">
            { place_type &&
                <div className="pickup-location-result-place-type">{place_type}</div>
            }
            { name &&
                <div className="pickup-location-result-detail">
                    <div className="pickup-location-result-name">{name}</div>
                    {locality && <div className="pickup-location-result-locality">{locality}</div>}
                </div>
            }
        </div>
    );
};

PickUpResult.propTypes = {
    data: PropTypes.object,
}

PickUpResult.defaultProps = {
    data: {}
}

export default PickUpResult;