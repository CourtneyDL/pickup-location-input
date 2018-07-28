import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PickUpResults from '../../../source/js/components/App/PickUpResults';
import PickUpResult from '../../../source/js/components/App/PickUpResult';

describe('components/App/PickUpResults', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickUpResults/>);
        expect(wrapper.children()).to.have.length(0, 'root is not an empty div');
        const div_elem = wrapper.find('div.hidden');
        expect(div_elem).to.have.length(1,'root div not hidden')
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