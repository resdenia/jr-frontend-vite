import React from 'react';
import styles from './TypeOfIncome.module.css';
import { IconArrow } from '../../../utils/iconLogic/iconListArrow';

// {
// 	date: 'date',
// 	icon: 'ArrowCircle2',
// 	prognose: 10000,
// 	actual: 6000,
// 	name: 'Salary',
// },
const TypeOfIncome = ({ incomes }) => {
    return (
        <div>
            <h3>Type Of Income</h3>
            {incomes.length > 0 &&
                incomes.map((item) => {
                    const IconIncome = IconArrow[item.icon];

                    return (
                        <div
                            className={styles.itemWrapper}
                            key={`${item.date}_${item.actual}_${item.prognose}`}
                        >
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <IconIncome />
                                </div>
                                <div className={styles.metaItem}>
                                    <div className={styles.dateItem}>
                                        LastUpdaed {item.date}
                                    </div>

                                    <div className={styles.typeItem}>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.stats}>
                                <div className={styles.actual}>
                                    {item.actual}
                                </div>
                                <div className={styles.prognose}>
                                    {item.prognose}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default TypeOfIncome;
