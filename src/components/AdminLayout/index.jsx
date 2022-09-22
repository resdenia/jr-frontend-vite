import React from 'react';
import styles from './AdminLayout.module.css';
import Header from '../AdminComponents/Header';
import Drawer from '../AdminComponents/Drawer';

const AdminLayout = ({ children }) => {
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
