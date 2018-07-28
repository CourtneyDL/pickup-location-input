import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PickUpResults from '../../../source/js/components/PickUp/PickUpResults';
import PickUpResult from '../../../source/js/components/PickUp/PickUpResult';

describe('components/PickUp/PickUpResults', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickUpResults/>);
        expect(wrapper.children()).to.have.length(0, 'root is not an empty div');
    });

    it ('should display results', function () {
        const results = [
            'Test result #1',
            'Test result #2',
            'Test result #3'
        ];
        const wrapper = shallow(<PickUpResults results={results}/>);

        expect(wrapper.find(PickUpResult)).to.have.length(3, `Doesn't contain the expected number of pickup results`);
    });
});