import React from 'react';
import styles from './Summary.module.css';

const Summary = ({ balance, expence, credit }) => {
    return (
        <div className={styles.wrapperInfo}>
            <div className={styles.wrapperBalance}>
                <h2>
                    Balance: <span className={styles.balance}>{balance}</span>
                </h2>
            </div>
            <div className={styles.wrapperExpence}>
                <h2>
                    Expence: <span className={styles.expence}>{expence}</span>
                </h2>
            </div>
            <div className={styles.wrapperExpence}>
                <h2>
                    Credit: <span className={styles.credit}>{credit}</span>
                </h2>
            </div>
        </div>
    );
};

export default Summary;
