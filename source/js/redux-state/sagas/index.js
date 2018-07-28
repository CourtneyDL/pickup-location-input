import { watchSearch } from 'redux-state/sagas/search';

export default function* rootSaga () {
    yield [
        watchSearch()
    ]
}