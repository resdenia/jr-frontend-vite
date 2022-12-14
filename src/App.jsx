import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/user/userContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Lobby from './pages/Lobby';
import Wallets from './pages/Wallets';
import Todos from './pages/Todos';
import Planner from './pages/Planner';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<Signup />} />

                    <Route path='/dashboard' element={<Lobby />} />
                    <Route path='/dashboard/wallets' element={<Wallets />} />
                    <Route path='/dashboard/todos' element={<Todos />} />
                    <Route path='/dashboard/planner' element={<Planner />} />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
