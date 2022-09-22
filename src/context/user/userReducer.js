import { TOGGLE_LANG } from '../types';

export const userReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_LANG:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};
