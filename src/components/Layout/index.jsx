import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ mt, mb, children }) => {
    return (
        <div
            style={{
                marginTop: `${mt}px`,
                marginBottom: `${mb}px`,
            }}
            className={styles.container}
        >
            <div className={styles.row}>{children}</div>
        </div>
    );
};

export default Layout;
