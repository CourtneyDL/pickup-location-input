/* global describe, it */
import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import PickUp from '../../source/js/views/PickUp';
import PickUpInput from '../../source/js/components/PickUp/PickUpInput';
import PickUpResults from '../../source/js/components/PickUp/PickUpResults';

const results_list = [
    'Test result #1',
    'Test result #2',
    'Test result #3',
];

describe('views/PickUp', function () {
    it('should be in its base state', function () {

        const wrapper = shallow(<PickUp/>);

        expect(wrapper.find('div.box.box--pickup-location')).to.have.length(1, 'Container class missing');
        expect(wrapper.find('div.form-holder.form-holder--pickup-location').children()).to.have.length(2, 'holder Does not have 2 children');
        
        const heading_elem = wrapper.find('h2');
        expect(heading_elem).to.have.length(1,'does not have one h2');
        expect(heading_elem.text()).to.equal(`Where are you going?`, 'Heading text is incorrect');
        
        expect(wrapper.find(PickUpInput)).to.have.length(1, 'Does not have a single instance of PickUpInput');
        expect(wrapper.find(PickUpResults)).to.have.length(0, 'PickUpResults present when results are empty');
    });

    it ('should have correct search_term after state update', function () {
        const search_term = 'Toronto';
        const wrapper = shallow(<PickUp/>);
        wrapper.setState({ search_term, search_performed: true });
        expect(wrapper.instance().state['search_term']).to.equal(search_term, 'search_term does not match');
        expect(wrapper.find(PickUpInput).prop('search_term')).to.equal(search_term, 'PickUpInput search_term does not match');
        expect(wrapper.find(PickUpResults)).to.have.length(1, 'PickUpResults not present for a search term greater than 2 characters is present with noresults are present');
    });

    it ('should have correct results from props', function () {
        const search_term = 'Manchester';
        const wrapper = shallow(<PickUp/>);
        wrapper.setState({ search_term, search_performed: true, results: results_list });

        const state_results = wrapper.instance().state['results'];
        expect(state_results).to.eql(results_list, 'results does not match');
        expect(state_results).to.have.length(3,'there are not 3 results');
        
        const child_results_array = wrapper.find(PickUpResults).prop('results');
        expect(child_results_array).to.eql(results_list, 'PickupResults results prop does not match');
    });

    it ('should not have results if search term is single character', function () {
        const search_term = 'M';
        const wrapper = shallow(<PickUp/>);
        wrapper.setState({ search_term, search_performed: true, results: results_list });
        expect(wrapper.find(PickUpResults)).to.have.length(0, 'PickUpResults present when search term is only 1 character in length');
    });

    it ('should not have results after reverting back to 1 character search term', function () {
        const search_term = 'Manchester';
        const wrapper = shallow(<PickUp/>);
        wrapper.setState({ search_term, search_performed: true, results: results_list });
        expect(wrapper.find(PickUpResults)).to.have.length(1, 'PickUpResults not present when search term is more than 1 character');

        wrapper.setState({ search_term: 'M' });
        expect(wrapper.find(PickUpResults)).to.have.length(0, 'PickUpResults present when search term is only 1 character in length');
    });
});