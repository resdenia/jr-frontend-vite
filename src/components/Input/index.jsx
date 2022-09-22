import React from 'react';
import styles from './Input.module.css';

const Input = ({ labelName, inputPlaceholder, type, name }) => {
    return (
        <div className={styles.formControl}>
            <label className={styles.label} htmlFor={name}>
                {labelName}
            </label>
            <input
                className={styles.input}
                type={type}
                name={name}
                placeholder={inputPlaceholder}
            />
        </div>
    );
};

export default Input;
