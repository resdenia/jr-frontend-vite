import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/user/userContext';
import Header from '../AdminComponents/Header';
import Drawer from '../AdminComponents/Drawer';
import styles from './AdminLayout.module.css';
import auth from '../../api/auth';

const AdminLayout = ({ children }) => {
    const { currentUser, setCurrentUser, loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            if (!currentUser) {
                auth.getUser(JSON.stringify({ token: token }))
                    .then((res) => {
                        if (res.ok) {
                            // console.log(res.json());
                            return res.json();
                        } else {
                            navigate('/signin');
                        }
                    })
                    .then((res) => {
                        console.log(res);
                        if (!res.user) {
                            localStorage.removeItem('jwtToken');
                            navigate('/signin');
                        }
                        setCurrentUser(true);
                        loginUser(res.user);
                    })
                    .catch((err) => {
                        console.log(err);
                        navigate('/signin');
                    });
            }
        } else {
            navigate('/signin');
        }
    }, []);

    return (
        <div className={styles.mainWrapper}>
            <Drawer />
            <div className={styles.mainContainer}>
                <Header />
                <div className={styles.mainContent}>{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;
