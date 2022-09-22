import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ color, path, children }) => {
    return (
        <Link
            className={[styles[color], styles.buttonClass].join('')}
            to={path}
        >
            {children}
        </Link>
    );
};

export default Button;
