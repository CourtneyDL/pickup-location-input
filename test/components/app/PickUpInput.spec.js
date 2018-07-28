import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PickUpInput from '../../../source/js/components/PickUp/PickUpInput';

describe('components/PickUp/PickUpInput', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickUpInput/>);

        expect(wrapper.find('div.pickup-location-input')).to.have.length(1,'Root element class missing')
        expect(wrapper.contains(<label htmlFor="search_term">Pick-Up Location</label>)).to.equal(true, 'Label missing');
        
        const input_elem = wrapper.find('input[name="search_term"]');
        expect(input_elem).to.have.length(1, 'Input missing');
        expect(input_elem.prop('placeholder')).to.equal('city, airport, station, region and district...');
    });

    it('should have a search term', function () {
        const test_value = 'This is a test';
        const wrapper = shallow(<PickUpInput search_term={test_value}/>);
        const input_elem = wrapper.find('input[name="search_term"]');
        expect(input_elem.props().value).to.equal(test_value);
    });

    it('search term should update', function () {
        const start_value = 'This is a test';
        const end_value = 'This is a test extra';
        const on_change_func = search_term => {
            wrapper.setProps({ search_term });
        };
        const wrapper = shallow(<PickUpInput search_term={start_value} onChange={on_change_func}/>);
        const input_elem = wrapper.find('input[name="search_term"]');
        expect(input_elem.props().value).to.equal(start_value,'Initial value incorrect');
        
        input_elem.simulate('change', {currentTarget: {value: end_value}});

        expect(wrapper.find('input[name="search_term"]').props().value).to.equal(end_value, 'Closing value incorrect');
    });
});