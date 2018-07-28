import createLogger from 'redux-logger';
import { Map } from 'immutable';

// Redux logger
const logger = createLogger({
    // State transformer
    // transforms Immutable maps from reducers
    // to the plain JS objects
    stateTransformer: (state) => {
        const new_state = {};

        Object.keys(state).forEach((key) => {
            const state_item = state[key];

            if (Map.isMap(state_item)) {
                new_state[key] = state_item.toJS();
            } else {
                new_state[key] = state_item;
            }
        });

        return new_state;
    },
});

export default logger;
