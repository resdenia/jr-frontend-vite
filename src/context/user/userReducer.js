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
                incomes: [...action.payload.incomes],
                expences: [...action.payload.expences],
                currentUser: true,
            };
        case LOGOUT:
            return {
                ...state,
                user: {},
                currentUser: false,
            };
        case CURRENT_USER:
            if (!action.payload) {
                return state;
            }
            if (
                action.payload.typeOfIncome &&
                action.payload.typeOfIncome.length > 0
            ) {
                action.payload.typeOfIncome.forEach((typeIncome) => {
                    typeIncome.actual = 0;
                    if (typeIncome.income && typeIncome.income.length > 0) {
                        typeIncome.income.forEach((income) => {
                            typeIncome.actual =
                                typeIncome.actual + income.amount;
                        });
                    }
                });
            }
            if (
                action.payload.typeOfExpence &&
                action.payload.typeOfExpence.length > 0
            ) {
                action.payload.typeOfExpence.forEach((typeexpence) => {
                    typeexpence.actual = 0;
                    if (typeexpence.expence && typeexpence.expence.length > 0) {
                        typeexpence.expence.forEach((expence) => {
                            typeexpence.actual =
                                typeexpence.actual + expence.amount;
                        });
                    }
                });
            }
            return {
                ...state,
                user: action.payload,
                wallets: action.payload.wallets,
                typeOfExpence: action.payload.typeOfExpence,
                typeOfIncome: action.payload.typeOfIncome,
                incomes: action.payload.incomes,
                expences: action.payload.expences,
                currentUser: true,
            };
        case ADD_WALLET:
            const arrWallets = state.wallets;
            arrWallets.push({ ...action.payload.wallet });
            return {
                ...state,
                wallets: arrWallets,
                user: action.payload.user,
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
