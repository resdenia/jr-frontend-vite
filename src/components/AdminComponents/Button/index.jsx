import React from 'react';
import styles from './Button.module.css';

const Button = ({ className, type, content }) => {
    return (
        <button className={[styles.blueColor, className].join(' ')} type={type}>
            {content}
        </button>
    );
};

export default Button;
