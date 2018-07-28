import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PickUpResults from '../../../source/js/components/PickUp/PickUpResults';
import PickUpResult from '../../../source/js/components/PickUp/PickUpResult';

describe('components/PickUp/PickUpResults', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickUpResults/>);
        expect(wrapper.find('.pickup-location-results')).to.have.length(1,'Root element missing');
        expect(wrapper.find('.pickup-location-results').children()).to.have.length(0,'Root element has children');
    });

    it('should display no results found', function () {
        const wrapper = shallow(<PickUpResults search_performed={true}/>);

        const no_results_elem = wrapper.find('div.no-results');
        expect(no_results_elem).to.have.length(1, 'no results div missing');
        expect(no_results_elem.text()).to.equal('No results found');
    });

    it ('should display results', function () {
        const results = [
            'Test result #1',
            'Test result #2',
            'Test result #3'
        ];
        const wrapper = shallow(<PickUpResults search_performed={true} results={results}/>);

        expect(wrapper.find(PickUpResult)).to.have.length(3, `Doesn't contain the expected number of pickup results`);
    });
});