import { TOGGLE_LANG } from '../types';

export const languageReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_LANG:
            return {
                ...state,
                language: action.payload,
            };

        default:
            return state;
    }
};
