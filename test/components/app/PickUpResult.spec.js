import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PickupResult from '../../../source/js/components/PickUp/PickUpResult';

describe('components/PickUp/PickUpResult', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<PickupResult/>);
        expect(wrapper.html()).to.equal('<div></div>', 'not an empty div');
    });
    it('should display data', function () {
        const test_value = 'I am a result'
        const wrapper = shallow(<PickupResult data={test_value}/>);
        expect(wrapper.text()).to.equal(test_value, 'displaying incorrect data');
    });
});