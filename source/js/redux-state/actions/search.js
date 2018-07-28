import { createAction } from 'redux-actions';

export const SEARCH_TERM_UPDATE = 'SEARCH_TERM_UPDATE';
export const updateSearchTerm = createAction(SEARCH_TERM_UPDATE, search_term => search_term);

export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';
export const searchComplete = createAction(SEARCH_COMPLETE, results => results);
