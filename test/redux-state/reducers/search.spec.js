import { Map, List } from 'immutable';
import {expect} from 'chai';

import { SEARCH_TERM_UPDATE, SEARCH_COMPLETE } from '../../../source/js/redux-state/actions/search';
import { initialState as initial_state } from '../../../source/js/redux-state/reducers/search';
import search_reducer from '../../../source/js/redux-state/reducers/search';
import { manchester_results } from '../../libs/api-client.data';

describe('reducers/search', function () {
    const initial_state = Map({
        search_performed: 0,
        search_term: '',
        results: List([])
    });

    describe('INVALID_ACTION', function () {

        it('state should not change', function () {
            const action = {
                type: 'INVALID_ACTION',
                payload: 'a string'
            };

            const actual_state = search_reducer(initial_state, action);
            expect(actual_state.equals(initial_state)).to.equal(true);
        });

    });

    describe(SEARCH_TERM_UPDATE, function () {

        it('should update search term', function () {
            const action = {
                type: SEARCH_TERM_UPDATE,
                payload: 'a string'
            };

            const actual_state = search_reducer(initial_state, action);
            expect(actual_state.equals(initial_state)).to.equal(false, `State hasn't changed`);
            expect(actual_state.get('search_term')).to.equal(action.payload, 'Search term not updated')
        });
    });

    describe(SEARCH_COMPLETE, function () {

        it('should update results', function () {
            const action = {
                type: SEARCH_COMPLETE,
                payload: manchester_results
            };

            const actual_state = search_reducer(initial_state, action);
            expect(actual_state.equals(initial_state)).to.equal(false, `State hasn't changed`);
            
            const results_list = actual_state.get('results');
            expect(results_list.size).to.equal(6, 'Number of results is not 6');
            expect(results_list.toJS()).to.eql(action.payload, 'Results not updated');

            expect(actual_state.get('search_performed')).to.equal(true, 'search_performed not updated');
        });
    });
});