import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../../source/js/views/App';
import PickUp from '../../source/js/views/PickUp';

describe('views/App', function () {
    it('should be in its base state', function () {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('div.container')).to.have.length(1, 'Container div missing');
        expect(wrapper.find(PickUp)).to.have.length(1, 'Does not have a single instance of PickUp');
    });
});