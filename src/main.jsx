import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { LanguageState } from './context/language/languageState';
import { UserState } from './context/user/userState';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Lobby from './pages/Lobby';
import Wallets from './pages/Wallets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LanguageState>
            <UserState>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<Signup />} />

                        <Route path='/dashboard' element={<Lobby />} />
                        <Route
                            path='/dashboard/wallets'
                            element={<Wallets />}
                        />
                    </Routes>
                </BrowserRouter>
            </UserState>
        </LanguageState>
    </React.StrictMode>,
);
