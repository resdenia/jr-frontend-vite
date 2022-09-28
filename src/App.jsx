import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/user/userContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Lobby from './pages/Lobby';
import Wallets from './pages/Wallets';
import auth from './api/auth';

function App() {
    const { setCurrentUser } = useContext(UserContext);

    // const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const jwt = localStorage.getItem('jwttoken');

        if (jwt) {
            auth.getCurrentUser(JSON.parse(jwt))
                .then((result) => {
                    setCurrentUser(result);
                })
                .catch((err) => console.log());
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/dashboard' element={<Lobby />} />
                <Route path='/dashboard/wallets' element={<Wallets />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;