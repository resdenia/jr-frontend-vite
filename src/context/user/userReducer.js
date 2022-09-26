import {
    LOGIN,
    LOGOUT,
    ADD_INCOME,
    ADD_EXPENCE,
    ADD_WALLET,
    ADD_TYPE_OF_EXPENCE,
    ADD_TYPE_OF_INCOME,
} from '../types';

export const userReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
