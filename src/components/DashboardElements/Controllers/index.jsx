import React from 'react';
import styles from './Controllers.module.css';
import { ReactComponent as ReactAdd } from '../../../assets/icons/add.svg';
import { ReactComponent as ReactMinus } from '../../../assets/icons/minus.svg';

const Controllers = ({
    openAddWallet,
    openAddIncomeType,
    openAddExpenceType,
    openAddExpence,
    openAddIncome,
}) => {
    return (
        <div className={styles.controllers}>
            <div className={styles.addWallet}>
                <div
                    className={styles.iconWrapperGreen}
                    onClick={() => {
                        openAddWallet('addWallet');
                    }}
                >
                    <ReactAdd />
                </div>
                Add Wallet
            </div>
            <div className={styles.addIncomeType}>
                <div
                    className={styles.iconWrapperGreen}
                    onClick={() => {
                        openAddIncomeType('addIncomeType');
                    }}
                >
                    <ReactAdd />
                </div>
                Add income Type
            </div>
            <div className={styles.addExpence}>
                <div
                    className={styles.iconWrapperRed}
                    onClick={() => {
                        openAddExpenceType('addExpenceType');
                    }}
                >
                    <ReactAdd />
                </div>
                Add regular expence
            </div>
            <div className={styles.workTriggers}>
                <div className={styles.addIncome}>
                    <div
                        className={styles.iconWrapperGreen}
                        onClick={() => {
                            openAddIncome('addIncome');
                        }}
                    >
                        <ReactAdd />
                    </div>
                    Income
                </div>
                <div className={styles.addExpence}>
                    <div
                        className={styles.iconWrapperRed}
                        onClick={() => {
                            openAddExpence('addExpence');
                        }}
                    >
                        <ReactMinus />
                    </div>
                    Expence
                </div>
            </div>
        </div>
    );
};
export default Controllers;
