import React from 'react';
import styles from './InfoBox.module.css';
import Title from '../Title';

const InfoBox = ({ icon, title, description }) => {
    return (
        <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>{icon()}</div>
            <div className={styles.titleWrapper}>
                <Title tag='h4'>{title}</Title>
            </div>
            <div className={styles.descriptionWrapper}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoBox;
