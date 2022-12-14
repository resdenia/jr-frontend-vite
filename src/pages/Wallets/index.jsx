import React, { useState, useEffect, useRef, useContext, memo } from 'react';
import { UserContext } from '../../context/user/userContext';
import { useQuery } from 'react-query';

import { useIncome } from '../../hooks/incomeHook/incomeHook';
import { useExpence } from '../../hooks/expenceHook/expenceHook';
import AdminLayout from '../../components/AdminLayout';
import Controllers from '../../components/DashboardElements/Controllers';
import DailyRange from '../../components/DashboardElements/DailyRange';
import Summary from '../../components/DashboardElements/Summary';
import BoxDisplay from '../../components/DashboardElements/BoxDisplay';

import ListOfTriggers from '../../components/DashboardElements/ListOfTriggers';
import WalletsDisplay from '../../components/DashboardElements/WalletsDisplay';
import ViewTriggers from '../../components/DashboardElements/ViewTriggers';
import PopupWithForm from '../../components/DashboardElements/PopupWithForm';
import TypeOfExpenses from '../../components/DashboardElements/TypeOfExpenses';
import TypeOfIncome from '../../components/DashboardElements/TypeOfIncome';
import styles from './Wallets.module.css';

const Wallets = () => {
    const {
        balance,
        wallets,
        user,
        addWallet,
        addIncome,
        addExpence,
        addTypeOfIncome,
        addTypeOfExpence,
        typeOfIncome,
        typeOfExpence,
    } = useContext(UserContext);

    const incomes = useIncome();
    const expences = useExpence();
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [typeOfPopup, setTypeOfPopup] = useState('addWallet');
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisiblePopup(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const datePicker = (data) => {
        console.log('line-17', data);
    };
    const openPopupHandler = (type) => {
        setTypeOfPopup(type);
        setVisiblePopup(true);
    };
    const onSubmit = async (e, type, additionalData) => {
        switch (type) {
            case 'addWallet':
                addWallet({
                    iconName: additionalData.iconName,
                    name: e.target.name.value,
                    amount: e.target.amount.value,
                });
                setVisiblePopup(false);

                return;
            case 'addIncome':
                addIncome({
                    date: e.dateIncome,
                    amount: e.target.amount.value,
                    walletId: additionalData.walletId,
                    typeOfIncomeId: additionalData.typeOfIncomeId,
                    // date: additionalData.date,
                });
                return;
            case 'addExpence':
                addExpence({
                    date: e.dateExpence,
                    amount: e.target.amount.value,
                    walletId: additionalData.walletId,
                    typeOfExpenceId: additionalData.typeOfExpenceId,
                    // date: additionalData.date,
                });
                return;
            case 'addTypeOfExpence':
                addTypeOfExpence({
                    iconName: additionalData.iconName,
                    prognose: e.target.prognose.value,
                    name: e.target.name.value,
                });
                return;

            case 'addTypeOfIncome':
                addTypeOfIncome({
                    iconName: additionalData.iconName,
                    prognose: e.target.prognose.value,
                    name: e.target.name.value,
                });
                return;
            default:
                break;
        }
    };

    return (
        <>
            <AdminLayout>
                <div className={styles.infoRow}>
                    <div className={styles.datePicker}>
                        <div className={styles.allData}>
                            <DailyRange
                                onChangeHandler={(data) => {
                                    datePicker(data);
                                }}
                            />
                            <button className={styles.buttonAll}>
                                Display All Period
                            </button>
                        </div>
                    </div>
                    <div className={styles.mainContainer}>
                        <div className={styles.wrapperSection}>
                            <Controllers
                                openAddWallet={openPopupHandler}
                                openAddIncomeType={openPopupHandler}
                                openAddExpenceType={openPopupHandler}
                                openAddExpence={openPopupHandler}
                                openAddIncome={openPopupHandler}
                            />
                        </div>
                        <div className={styles.wrapperTwoColumns}>
                            <div className={styles.wrapperSection}>
                                <TypeOfIncome
                                    incomes={typeOfIncome ? typeOfIncome : []}
                                />
                            </div>

                            <div className={styles.wrapperSection}>
                                <TypeOfExpenses
                                    expences={
                                        typeOfExpence ? typeOfExpence : []
                                    }
                                />
                            </div>
                        </div>
                        <div className={styles.wrapperSection}>
                            <Summary
                                balance={user ? user.balance : '0'}
                                expence={'-3,000'}
                                credit={'3,000'}
                                mediana={'7,000'}
                            />
                        </div>
                        <div className={styles.wrapperSection}>
                            <ViewTriggers />
                        </div>
                        <div className={styles.wrapperSection}>
                            <WalletsDisplay wallets={wallets ? wallets : []} />
                        </div>

                        <div className={styles.boxInfoRow}>
                            <BoxDisplay />
                            <BoxDisplay />
                            <BoxDisplay />
                            <BoxDisplay />
                        </div>

                        <div className={styles.wrapperTwoColumns}>
                            <div className={styles.wrapperSection}>
                                <ListOfTriggers
                                    type='Income'
                                    data={incomes ? incomes : []}
                                />
                            </div>
                            <div className={styles.wrapperSection}>
                                <ListOfTriggers
                                    type='Expence'
                                    data={expences ? expences : []}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
            {visiblePopup ? (
                <PopupWithForm
                    ref={ref}
                    type={typeOfPopup}
                    onSubmitHandler={onSubmit}
                />
            ) : (
                ''
            )}
        </>
    );
};

export default Wallets;
