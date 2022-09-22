import React from 'react';
import styles from './ButtonIcon.module.css';
import { Link } from 'react-router-dom';

const ButtonIcon = ({ Icon, path, children }) => {
    return (
        <Link to={path} className={styles.buttonIcon}>
            <Icon /> <span className={styles.buttonText}>{children}</span>
        </Link>
    );
};

export default ButtonIcon;
