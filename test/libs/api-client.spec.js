import {expect} from 'chai';

import { _processResponse } from '../../source/js/libs/api-client';

import { empty_data, manchester_data, manchester_results } from './api-client.data'

describe('libs/api-client._processResponse', function () {
    it ('should return an empty array if no results are found', function () {
        const actual_results = _processResponse(empty_data);
        expect(actual_results).to.eql([],'Not an empty array');
    });

    it ('should return correctly processed results', function () {
        const actual_results = _processResponse(manchester_data);
        expect(actual_results).to.have.length(6, 'There are not 6 results');
        expect(actual_results).to.eql(manchester_results, 'Does not match expected results');
    })
});