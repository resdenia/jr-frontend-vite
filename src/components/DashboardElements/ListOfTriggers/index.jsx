import React from 'react';
import styles from './ListOfTriggers.module.css';
import { IconArrow } from '../../../utils/iconLogic/iconListArrow';

const ListOfTriggers = ({ type, data }) => {
    console.log(data);
    return (
        <div>
            <h2>{type}</h2>
            {data.length > 0 &&
                data.map((item) => {
                    return (
                        <div
                            className={styles.itemWrapper}
                            key={`${item.date}_${item.amount}_${item.type}`}
                        >
                            <div className={styles.infoItem}>
                                <div className={styles.metaItem}>
                                    <div className={styles.dateItem}>
                                        {item.date}
                                    </div>

                                    <div className={styles.typeItem}>
                                        {item.type}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.amount}>{item.amount}</div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ListOfTriggers;
