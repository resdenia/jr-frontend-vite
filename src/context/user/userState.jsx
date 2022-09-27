import React, { useReducer, useCallback } from 'react';
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

    const addWallet = (name, balance) =>
        dispatch({ type: ADD_WALLET, payload: { name, balance } });

    const addIncome = (date, name, amount, wallet) =>
        dispatch({ type: ADD_INCOME, payload: { date, name, amount, wallet } });
    const addExpence = (date, name, amount, wallet) =>
        dispatch({
            type: ADD_EXPENCE,
            payload: { date, name, amount, wallet },
        });

    const addTypeOfIncome = (name, amount, prognose) =>
        dispatch({
            type: ADD_TYPE_OF_INCOME,
            payload: { date, name, amount, wallet },
        });
    const addTypeOfExpence = (name, amount, prognose) =>
        dispatch({
            type: ADD_TYPE_OF_EXPENCE,
            payload: { date, name, amount, wallet },
        });

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
                user: state.user,
                currentUser: state.currentUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
