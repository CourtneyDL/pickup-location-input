import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import PickUpResults from '../../../source/js/components/PickUp/PickUpResults';
import PickUpResult from '../../../source/js/components/PickUp/PickUpResult';

import { manchester_results } from '../../libs/api-client.data';

describe('components/PickUp/PickUpResults', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickUpResults/>);
        const results_elem = wrapper.find('.autocomplete-results.autocomplete-results--pickup-location');
        expect(results_elem).to.have.length(1,'Root element missing');
        expect(results_elem.children()).to.have.length(0,'Root element has children');
    });

    it('should display no results found', function () {
        const wrapper = shallow(<PickUpResults search_performed={true}/>);

        const no_results_elem = wrapper.find('.autocomplete-result.autocomplete-result--no-result');
        expect(no_results_elem).to.have.length(1, 'no results element missing');
        expect(no_results_elem.text()).to.equal('No results found');
    });

    it ('should display results', function () {
        const wrapper = shallow(<PickUpResults search_performed={true} results={manchester_results}/>);

        expect(wrapper.find(PickUpResult)).to.have.length(6, `Doesn't contain the expected number of pickup results`);
    });
});