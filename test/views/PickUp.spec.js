import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { List } from 'immutable';

import { PickUp } from '../../source/js/views/PickUp';
import PickUpInput from '../../source/js/components/PickUp/PickUpInput';
import PickUpResults from '../../source/js/components/PickUp/PickUpResults';

describe('views/PickUp', function () {
    it('should be in its base state', function () {

        const wrapper = shallow(<PickUp/>);

        expect(wrapper.find('div.pickup-location-container')).to.have.length(1, 'Container class missing');
        expect(wrapper.children()).to.have.length(2, 'Does not have 2 children');
        
        const heading_elem = wrapper.find('h2');
        expect(heading_elem).to.have.length(1,'does not have one h2');
        expect(heading_elem.text()).to.equal(`Where are you going?`, 'Heading text is incorrect');
        
        expect(wrapper.find(PickUpInput)).to.have.length(1, 'Does not have a single instance of PickUpInput');
        expect(wrapper.find(PickUpResults)).to.have.length(0, 'PickUpResults present when results are empty');
    });

    it ('should have correct search_term from props', function () {
        const search_term = 'Toronto';
        const wrapper = shallow(<PickUp search_term={search_term}/>);
        expect(wrapper.instance().props['search_term']).to.equal(search_term, 'search_term does not match');
        expect(wrapper.find(PickUpInput).prop('search_term')).to.equal(search_term, 'PickUpInput search_term does not match');
    });

    it ('should have correct results from props', function () {
        const results_list = List([
            'Test result #1',
            'Test result #2',
            'Test result #3'
        ]);

        const wrapper = shallow(<PickUp results={results_list}/>);

        const prop_results = wrapper.instance().props['results'];
        expect(prop_results.equals(results_list)).to.equal(true, 'results does not match');
        expect(prop_results.size).to.equal(3,'there are not 3 results');
        
        const child_results_array = wrapper.find(PickUpResults).prop('results');
        const child_results_match = results_list.every((result,index) => result === child_results_array[index]);

        expect(child_results_match).to.equal(true, 'PickupResults results prop does not match');
    });
});