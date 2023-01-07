import React from 'react';
import styles from './NoData.module.css';

const NoData = () => {
    return (
        <div className={styles.noData}>
            <div className={styles.noDataIcon}></div>
            No data
        </div>
    );
};

export default NoData;
