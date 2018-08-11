import React from 'react';
import PropTypes from 'prop-types';

import PickUpPlaceTypeTag from 'components/PickUp/PickUpPlaceTypeTag';

const PickUpResult = ({ data }) => {
    const { name, place_type, locality } = data;

    return (
        <li className="autocomplete-results__list-item">
            <div className="autocomplete-result">
                { place_type &&
                    <PickUpPlaceTypeTag place_type={ place_type } />
                }
                { name &&
                    <div className="autocomplete-result-detail">
                        <div className="autocomplete-result-detail__name">{name}</div>
                        {locality && <div className="autocomplete-result-detail__locality">{locality}</div>}
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
    data: {},
}

export default PickUpResult;