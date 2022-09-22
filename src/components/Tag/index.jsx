import React from 'react';
import styles from './Tag.module.css';

const Tag = ({ color, children }) => {
    return (
        <div className={[styles[color], styles.tagWrapper].join(' ')}>
            {children}
        </div>
    );
};

export default Tag;
