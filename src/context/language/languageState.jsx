import React, { useReducer } from 'react';
import { LanguageContext } from './languageContext';
import { languageReducer } from './languageReducer';
import { ADD_INCOME, ADD_WALLET, TOGGLE_LANG } from '../types';

export const LanguageState = ({ children }) => {
    const initialState = {
        language: 'en',
    };
    const [state, dispatch] = useReducer(languageReducer, initialState);

    const switchLang = (lang) => dispatch({ type: TOGGLE_LANG, payload: lang });

    return (
        <LanguageContext.Provider
            value={{ switchLang, language: state.language }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
