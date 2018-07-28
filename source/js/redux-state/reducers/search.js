import { Map, List } from 'immutable';
import _ from 'lodash/object';

import {
    SEARCH_TERM_UPDATE,
    SEARCH_COMPLETE
} from 'redux-state/actions/search';

export const initial_state = Map({
    search_performed: false,
    search_term: '',
    results: List([])
});

const actionsMap = {
    [SEARCH_TERM_UPDATE]: (state,action) => {
        return state.merge({
            search_term: _.get(action, 'payload', ''),
        })
    },
    [SEARCH_COMPLETE]: (state,action) => {
        return state.merge({
            search_performed: true,
            results: _.get(action, 'payload', [])
        });
    }
};

export default function reducer(state = initial_state, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}
