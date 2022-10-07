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
                wallets: action.payload.wallets,

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
                wallets: action.payload.wallets,
                typeOfExpence: action.payload.typeOfExpence,
                typeOfIncome: action.payload.typeOfIncome,
                currentUser: true,
            };
        case ADD_WALLET:
            const arrWallets = state.wallets;
            arrWallets.push({ ...action.payload });
            return {
                ...state,
                wallets: arrWallets,
            };
        case ADD_TYPE_OF_INCOME:
            const arrTypesIncome = state.typeOfIncome;
            arrTypesIncome.push({ ...action.payload });
            return {
                ...state,
                typeOfIncome: arrTypesIncome,
            };
        case ADD_TYPE_OF_EXPENCE:
            const arrTypesExpence = state.typeOfExpence;
            arrTypesExpence.push({ ...action.payload });
            return {
                ...state,
                typeOfExpence: arrTypesExpence,
            };
        default:
            return state;
    }
};
