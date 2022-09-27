import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LanguageState } from './context/language/languageState';
import { UserState } from './context/user/userState';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LanguageState>
            <UserState>
                <App />
            </UserState>
        </LanguageState>
    </React.StrictMode>,
);
