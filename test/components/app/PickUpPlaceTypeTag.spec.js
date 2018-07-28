import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PickUpPlaceTypeTag from '../../../source/js/components/PickUp/PickUpPlaceTypeTag';

describe('components/PickUp/PickUpPlaceTypeTag', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickUpPlaceTypeTag/>);
        const root_elem = wrapper.first();
        expect(root_elem.is('.pickup-location-result-place-type')).to.equal(true, 'root elem missing expected class');
        expect(root_elem.text()).is.equal('Place','Tag text is not "Place"')
    });
    it('should be an airport tag', function () {
        const wrapper = shallow(<PickUpPlaceTypeTag place_type="A"/>);
        expect(wrapper.first().is('.airport')).to.equal(true, 'root elem missing expected class');
        expect(wrapper.text()).is.equal('Airport','Tag text is not "Airport"')
    });
    it('should be a city tag', function () {
        const wrapper = shallow(<PickUpPlaceTypeTag place_type="C"/>);
        expect(wrapper.first().is('.city')).to.equal(true, 'root elem missing expected class');
        expect(wrapper.text()).is.equal('City','Tag text is not "City"')
    });
    it('should be a station tag', function () {
        const wrapper = shallow(<PickUpPlaceTypeTag place_type="T"/>);
        expect(wrapper.first().is('.station')).to.equal(true, 'root elem missing expected class');
        expect(wrapper.text()).is.equal('Station','Tag text is not "Station"')
    });
    it('should be a district tag', function () {
        const wrapper = shallow(<PickUpPlaceTypeTag place_type="D"/>);
        expect(wrapper.first().is('.district')).to.equal(true, 'root elem missing expected class');
        expect(wrapper.text()).is.equal('District','Tag text is not "District"')
    });
});