import React from 'react';
import styles from './Title.module.css';

const Title = ({ tag, className, children }) => {
    switch (tag) {
        case 'h1':
            return (
                <h1 className={[styles.h1, styles[className]].join(' ')}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2 className={[styles.h2, styles[className]].join(' ')}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 className={[styles.h3, styles[className]].join(' ')}>
                    {children}
                </h3>
            );
        case 'h4':
            return (
                <h4 className={[styles.h4, styles[className]].join(' ')}>
                    {children}
                </h4>
            );
        case 'h5':
            return (
                <h5 className={[styles.h5, styles[className]].join(' ')}>
                    {children}
                </h5>
            );

        default:
            break;
    }
};

export default Title;
