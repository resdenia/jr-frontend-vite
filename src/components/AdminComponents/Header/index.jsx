import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.wrapperHeader}>
            <div className={styles.rowHeader}>
                <div className={styles.wrapperLogo}>
                    <h3 className={styles.logoElement}>Logo</h3>
                </div>
                <div className={styles.wrapperMenu}>Item</div>
            </div>
        </div>
    );
};

export default Header;
