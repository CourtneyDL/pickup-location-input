import { Map, List } from 'immutable';
import {expect} from 'chai';

import { SEARCH_TERM_UPDATE, SEARCH_COMPLETE } from '../../../source/js/redux-state/actions/search';
import search from '../../../source/js/redux-state/reducers/search';

describe('reducers/search', function () {
    const initial_state = Map({
        search_term: '',
        results: List([])
    });

    describe('INVALID_ACTION', function () {

        it('state should not change', function () {
            const action = {
                type: 'INVALID_ACTION',
                payload: 'a string'
            };

            const actual_state = search(initial_state, action);
            expect(actual_state.equals(initial_state)).to.equal(true);
        });

    });

    describe(SEARCH_TERM_UPDATE, function () {

        it('should update search term', function () {
            const action = {
                type: SEARCH_TERM_UPDATE,
                payload: 'a string'
            };

            const actual_state = search(initial_state, action);
            expect(actual_state.equals(initial_state)).to.equal(false, `State hasn't changed`);
            expect(actual_state.get('search_term')).to.equal(action.payload, 'Search term not updated')
        });
    });

    describe(SEARCH_COMPLETE, function () {

        it('should update results', function () {
            const action = {
                type: SEARCH_COMPLETE,
                payload: [
                    'Result 1',
                    'Result 2',
                    'Result 3'
                ]
            };

            const actual_state = search(initial_state, action);
            expect(actual_state.equals(initial_state)).to.equal(false, `State hasn't changed`);
            
            const results_list = actual_state.get('results');
            expect(results_list.size).to.equal(3, 'Number of results is not 3');
            const updated = results_list.every((result,index) => result === action.payload[index]);
            
            expect(updated).to.equal(true, 'Results not updated');
        });
    });
});