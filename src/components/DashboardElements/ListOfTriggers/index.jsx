import React from 'react';
import styles from './ListOfTriggers.module.css';
import { IconArrow } from '../../../utils/iconLogic/iconListArrow';
import moment from 'moment';

const ListOfTriggers = ({ type, data }) => {
    return (
        <div>
            <h2>{type}</h2>
            {data.length > 0 &&
                data.map((item) => {
                    const IconDisplay = IconArrow[item[`typeOf${type}Icon`]];

                    return (
                        <div
                            className={styles.itemWrapper}
                            key={`${item.date}_${item.amount}_${type}`}
                        >
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <IconDisplay />
                                </div>
                                <div className={styles.metaItem}>
                                    <div className={styles.dateItem}>
                                        {moment(item.date).format('MM/DD/YYYY')}
                                    </div>

                                    <div className={styles.typeItem}>
                                        {item[`typeOf${type}Name`]}
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
