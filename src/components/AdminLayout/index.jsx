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
        // navigate('/signin');

        const token = localStorage.getItem('jwtToken');
        if (token) {
            if (!currentUser) {
                auth.getUser(JSON.stringify({ token }))
                    .then((res) => {
                        if (res.ok) {
                            setCurrentUser(true);
                            loginUser(res.user);
                        } else {
                            console.log('here');
                            navigate('/signin');
                            // throw Error('didnt find user');
                        }
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
