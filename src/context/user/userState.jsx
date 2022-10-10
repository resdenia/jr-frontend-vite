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
                dispatch({ type: ADD_WALLET, payload: result });
            })
            .catch((e) => console.log(e));
    };

    const addIncome = async ({ date, amount, walletId, typeOfIncomeId }) => {
        const income = await budget.addIncome(
            JSON.stringify({ date, amount, walletId, typeOfIncomeId }),
        );

        dispatch({ type: ADD_INCOME, payload: income });
    };

    const addExpence = async ({ date, typeOfExpenceId, amount, walletId }) => {
        const expence = await budget.addExpence(
            JSON.stringify({ date, amount, walletId, typeOfExpenceId }),
        );
        dispatch({
            type: ADD_EXPENCE,
            payload: expence,
        });
    };

    const addTypeOfIncome = async ({ name, prognose, iconName }) => {
        const typeOfIncome = await budget
            .addTypeOfIncome(JSON.stringify({ name, prognose, iconName }))
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                console.log(result);
                dispatch({
                    type: ADD_TYPE_OF_INCOME,
                    payload: result.typeOfIncome,
                });
            })
            .catch((e) => console.log(e));
    };
    const addTypeOfExpence = async ({ name, iconName, prognose }) => {
        const typeOfExpence = await budget
            .addTypeOfExpence(JSON.stringify({ name, iconName, prognose }))
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                dispatch({
                    type: ADD_TYPE_OF_EXPENCE,
                    payload: result.typeOfExpence,
                });
            })
            .catch((err) => console.log(err));
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
                typeOfIncome: state.typeOfIncome,
                incomes: state.incomes,
                expences: state.expences,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
