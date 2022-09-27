import React from 'react';
import styles from './Input.module.css';

const Input = ({
    labelName,
    inputPlaceholder,
    type,
    name,
    value,
    onChange,
}) => {
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
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
