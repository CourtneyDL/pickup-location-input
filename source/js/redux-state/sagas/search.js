import { takeEvery, put, select } from 'redux-saga/effects';

import api from 'libs/api-client';

import { SEARCH_TERM_UPDATE, searchComplete } from 'redux-state/actions/search';

export function* watchSearch() {
    yield takeEvery(SEARCH_TERM_UPDATE, performSearch);
}

const getSearchState = state => state.search.toJS();

export function* performSearch () {
    const { search_term } = yield select(getSearchState);

    if (!search_term || search_term.length < 2) {
        return;
    }

    try {
        const results = yield api.search(search_term);
        yield put(searchComplete(results));
    } catch (e) {
        alert('An error occurred performing this search');
    }
}