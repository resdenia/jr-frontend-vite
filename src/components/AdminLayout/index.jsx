import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../context/user/userContext';
import Header from '../AdminComponents/Header';
import Drawer from '../AdminComponents/Drawer';
import styles from './AdminLayout.module.css';

const AdminLayout = ({ children }) => {
    const { currentUser } = useContext(UserContext);

    return (
        <>
            {currentUser ? (
                <div className={styles.mainWrapper}>
                    <Drawer />
                    <div className={styles.mainContainer}>
                        <Header />
                        <div className={styles.mainContent}>{children}</div>
                    </div>
                </div>
            ) : (
                <Navigate to='/signin' />
            )}
        </>
    );
};

export default AdminLayout;
