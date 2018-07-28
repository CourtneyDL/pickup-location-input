import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PickUpInput from '../../../source/js/components/PickUp/PickUpInput';

describe('components/PickUp/PickUpInput', function () {
    it('should be in its base state', function () {
        const wrapper = mount(<PickUpInput/>);

        expect(wrapper.find('div.pickup-location-input')).to.have.length(1,'Root element class missing')
        expect(wrapper.contains(<label id="search_term_label" htmlFor="search_term">Pick-Up Location</label>)).to.equal(true, 'Label missing');
        
        const input_elem = wrapper.find('input[name="search_term"]');
        expect(input_elem).to.have.length(1, 'Input missing');
        expect(input_elem.prop('id')).to.equal('search_term', 'input id missing');
        expect(input_elem.prop('placeholder')).to.equal('city, airport, station, region and district...', 'placeholder missing');
                
        expect(input_elem.prop('aria-autocomplete')).to.equal('list', 'aria-autocomplete missing');
        expect(input_elem.prop('aria-haspopup')).to.equal('true', 'aria-haspopup missing');
        expect(input_elem.prop('aria-required')).to.equal('true', 'aria-required missing');

        const focused_element = document.activeElement;
        expect(focused_element.matches('input[name="search_term"]')).to.equal(true, 'input is not in focus');
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