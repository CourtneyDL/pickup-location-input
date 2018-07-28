import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import { App } from '../../source/js/views/App';
import PickUpInput from '../../source/js/components/App/PickUpInput';
import PickUpResults from '../../source/js/components/App/PickUpResults';

describe('views/App', function () {
    it('should be in its base state', function () {

        const wrapper = shallow(<App/>);

        expect(wrapper.children()).to.have.length(2);
        expect(wrapper.find(PickUpInput)).to.have.length(1);
        expect(wrapper.find(PickUpResults)).to.have.length(1);
    });
});