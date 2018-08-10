import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import PickupResult from '../../../source/js/components/PickUp/PickUpResult';
import PickUpPlaceTypeTag from '../../../source/js/components/PickUp/PickUpPlaceTypeTag';

import { manchester_results } from '../../libs/api-client.data';

describe('components/PickUp/PickUpResult', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickupResult/>);
        expect(wrapper.html()).to.equal('<li><div class="autocomplete-result"></div></li>', 'not an empty div');
    });
    it('should display data', function () {
        const test_result = manchester_results[0];
        const wrapper = shallow(<PickupResult data={test_result}/>);
        
        const matching_place_type_elems = wrapper.findWhere(node =>
            node.is(PickUpPlaceTypeTag) 
            && node.prop('place_type') === test_result.place_type);
        expect(matching_place_type_elems).to.have.length(1, 'Place type missing');
        
        const matching_name_elems = wrapper.findWhere(node =>
            node.is('div.pickup-location-result-name') 
            && node.text() === test_result.name);
        expect(matching_name_elems).to.have.length(1, 'Name missing');

        const matching_locality_elems = wrapper.findWhere(node =>
            node.is('div.pickup-location-result-locality') 
            && node.text() === test_result.locality);
        expect(matching_locality_elems).to.have.length(1, 'Locality missing');
    });
});