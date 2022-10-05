import React, { useState, useEffect, useRef, useContext } from 'react';
import { UserContext } from '../../context/user/userContext';

import AdminLayout from '../../components/AdminLayout';
import Controllers from '../../components/DashboardElements/Controllers';
import DailyRange from '../../components/DashboardElements/DailyRange';
import Summary from '../../components/DashboardElements/Summary';
import BoxDisplay from '../../components/DashboardElements/BoxDisplay';

import ListOfTriggers from '../../components/DashboardElements/ListOfTriggers';
import WalletsDisplay from '../../components/DashboardElements/WalletsDisplay';
import ExpenceDisplay from '../../components/DashboardElements/ExpenceDisplay';
import PopupWithForm from '../../components/DashboardElements/PopupWithForm';
import TypeOfExpenses from '../../components/DashboardElements/TypeOfExpenses';
import TypeOfIncome from '../../components/DashboardElements/TypeOfIncome';
import styles from './Wallets.module.css';

// ArrowCircle2,
// ArrowCircle,
// ArrangeSquare2,
// ArrangeSquare,
const dumpDataIncome = [
    {
        id: 'wewqewqe1',
        icon: 'ArrowCircle2',
        amount: 220,
        type: 'Freelance',
        date: 'date',
    },
    {
        id: 'wewqewqe2',
        icon: 'ArrowCircle',
        amount: 120,
        type: 'Sold Card',
        date: 'date',
    },
    {
        id: 'wewqewqe3',
        icon: 'ArrangeSquare2',
        amount: 220,
        type: 'Salary',
        date: 'date',
    },

    {
        id: 'wewqewqe4',
        icon: 'ArrangeSquare2',
        amount: 210,
        type: 'Freelance',
        date: 'date',
    },
];

const dumpDataExpence = [];

const dumpTypeIncome = [
    // {
    //     date: 'date',
    //     icon: 'ArrowCircle2',
    //     prognose: 10000,
    //     actual: 6000,
    //     name: 'Salary',
    // },
    // {
    //     date: 'date',
    //     icon: 'ArrowCircle',
    //     prognose: 5000,
    //     actual: 1000,
    //     name: 'Freelance',
    // },
    // {
    //     date: 'date',
    //     icon: 'ArrowCircle',
    //     prognose: 5000,
    //     actual: 1000,
    //     name: 'WebsiteBuilder',
    // },
];

const dumpTypeExpence = [
    // {
    //     date: 'date',
    //     icon: 'ArrowCircle2',
    //     prognose: 10000,
    //     actual: 6000,
    //     name: 'Salary',
    // },
    // {
    //     date: 'date',
    //     icon: 'ArrowCircle',
    //     prognose: 5000,
    //     actual: 1000,
    //     name: 'Freelance',
    // },
    // {
    //     date: 'date',
    //     icon: 'ArrowCircle',
    //     prognose: 5000,
    //     actual: 1000,
    //     name: 'WebsiteBuilder',
    // },
];

const Wallets = () => {
    const {
        wallets,
        user,
        addWallet,
        addIncome,
        addExpence,
        addTypeOfIncome,
        addTypeOfExpence,
    } = useContext(UserContext);

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [typeOfPopup, setTypeOfPopup] = useState('addWallet');
    // const [wallets, setWallets] = useState({});
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
    const onSubmit = async (e, type, icon = '') => {
        switch (type) {
            case 'addWallet':
                addWallet({
                    iconName: icon,
                    name: e.target.name.value,
                    amount: e.target.amount.value,
                });
                setVisiblePopup(false);

                return;
            case 'addIncome':
                addIncome({
                    date: e.dateIncome,
                    amount: e.target.amount.value,
                });
                return;
            case 'addExpence':
                addExpence({
                    date: e.dateExpence,
                    amount: e.target.amount.value,
                });
                return;
            case 'addTypeOfExpence':
                addTypeOfExpence({
                    iconName: icon,
                });
                return;

            case 'addTypeOfIncome':
                addTypeOfIncome({
                    iconName: icon,
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
                                <TypeOfIncome incomes={dumpTypeIncome} />
                            </div>
                            <div className={styles.wrapperSection}>
                                <TypeOfExpenses expences={dumpTypeExpence} />
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
                                    type='income'
                                    data={dumpDataIncome}
                                />
                            </div>
                            <div className={styles.wrapperSection}>
                                <ListOfTriggers
                                    type='expnese'
                                    data={dumpDataExpence}
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
