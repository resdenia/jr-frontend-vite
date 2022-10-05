import React, { useReducer, useCallback } from 'react';
import budget from '../../api/app';

import { UserContext } from './userContext';
import { userReducer } from './userReducer';
import {
    ADD_TYPE_OF_EXPENCE,
    ADD_WALLET,
    ADD_INCOME,
    ADD_EXPENCE,
    ADD_TYPE_OF_INCOME,
    CURRENT_USER,
} from '../types';

export const UserState = ({ children }) => {
    const initialState = {
        userId: null,
        user: null,
        currentUser: false,
        wallets: [],
        typeOfExpence: [],
        typeOfIncome: [],
        expences: [],
        incomes: [],
    };
    const [state, dispatch] = useReducer(userReducer, initialState);

    // const switchLang = (lang) => dispatch({ type: TOGGLE_LANG, payload: lang });
    const setCurrentUser = (currentUser, user) =>
        dispatch({
            type: CURRENT_USER,
            payload: { currentUser: currentUser, user: user },
        });
    const loginUser = (user) => {
        dispatch({ type: CURRENT_USER, payload: user });
    };

    const addWallet = async (wallet) => {
        const response = await budget
            .addWallet(JSON.stringify({ ...wallet }))
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                dispatch({ type: ADD_WALLET, payload: result.wallet });
            })
            .catch((e) => console.log(e));
    };

    const addIncome = async (date, amount, wallet, typeOfIncome) => {
        const income = await budget.addIncome(
            JSON.stringify({ date, amount, wallet, typeOfIncome }),
        );

        dispatch({ type: ADD_INCOME, payload: income });
    };

    const addExpence = async (date, typeOfExpence, amount, wallet) => {
        const expence = await budget.addExpence(
            JSON.stringify({ date, amount, wallet, typeOfExpence }),
        );
        dispatch({
            type: ADD_EXPENCE,
            payload: expence,
        });
    };

    const addTypeOfIncome = async (name, prognose, icon) => {
        const typeOfIncome = await budget.addTypeOfIncome(
            JSON.stringify({ name, prognose, icon }),
        );
        dispatch({
            type: ADD_TYPE_OF_INCOME,
            payload: typeOfIncome,
        });
    };
    const addTypeOfExpence = async (name, icon, prognose) => {
        const typeOfExpence = await budget.addTypeOfExpence(
            JSON.stringify({ name, icon, prognose }),
        );
        dispatch({
            type: ADD_TYPE_OF_EXPENCE,
            payload: typeOfExpence,
        });
    };

    return (
        <UserContext.Provider
            value={{
                setCurrentUser,
                addWallet,
                addIncome,
                addExpence,
                addTypeOfIncome,
                addTypeOfExpence,
                loginUser,
                wallets: state.wallets,
                user: state.user,
                currentUser: state.currentUser,
                typeOfExpence: state.typeOfExpence,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
