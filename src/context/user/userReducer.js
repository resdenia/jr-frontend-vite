import {
    LOGIN,
    LOGOUT,
    ADD_INCOME,
    ADD_EXPENCE,
    ADD_WALLET,
    ADD_TYPE_OF_EXPENCE,
    ADD_TYPE_OF_INCOME,
    CURRENT_USER,
} from '../types';

export const userReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                currentUser: true,
            };
        case LOGOUT:
            return {
                ...state,
                user: {},
                currentUser: false,
            };
        case CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                currentUser: true,
            };
        default:
            return state;
    }
};
