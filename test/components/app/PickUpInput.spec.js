import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import { PickUpInput } from '../../../source/js/components/App/PickUpInput';

describe('components/App/PickUpInput', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickUpInput/>);

        expect(wrapper.contains(<label htmlFor="search_term">Pick-Up Location</label>)).to.equal(true, 'Label missing');
        expect(wrapper.find('input[name="search_term"]')).to.have.length(1, 'Input missing');
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
        const update_func = search_term => {
            wrapper.setProps({ search_term });
        };
        const wrapper = shallow(<PickUpInput search_term={start_value} updateSearchTerm={update_func}/>);
        const input_elem = wrapper.find('input[name="search_term"]');
        expect(input_elem.props().value).to.equal(start_value,'Initial value incorrect');
        
        input_elem.simulate('change', {currentTarget: {value: end_value}});

        expect(wrapper.find('input[name="search_term"]').props().value).to.equal(end_value, 'Closing value incorrect');
    });
});