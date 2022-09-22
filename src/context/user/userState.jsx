import React, { useReducer } from 'react';
import { UserContext } from './userContext';
import { userReducer } from './userReducer';
import { TOGGLE_LANG } from '../types';

export const UserState = ({ children }) => {
    const initialState = {
        user: null,
    };
    const [state, dispatch] = useReducer(userReducer, initialState);

    const switchLang = (lang) => dispatch({ type: TOGGLE_LANG, payload: lang });

    return (
        <UserContext.Provider value={{ switchLang, language: state.language }}>
            {children}
        </UserContext.Provider>
    );
};
