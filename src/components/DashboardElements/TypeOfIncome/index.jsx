import React from 'react';
import styles from './TypeOfIncome.module.css';
import { IconArrow } from '../../../utils/iconLogic/iconListArrow';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import NoData from '../../NoData';

const TypeOfIncome = ({ incomes }) => {
    return (
        <div>
            <h3>Type Of Income</h3>
            <div className={styles.containerData}>
                <div className={styles.listData}>
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
                                                {item.lastDateUpdate}
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

                <div className={styles.chart}>
                    {incomes.length > 0 ? (
                        <ResponsiveContainer>
                            <PieChart height={300}>
                                <Pie
                                    data={incomes}
                                    dataKey='actual'
                                    nameKey='name'
                                    cx='50%'
                                    cy='50%'
                                    outerRadius={50}
                                    fill='#8884d8'
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <NoData />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TypeOfIncome;
