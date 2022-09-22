import React, { useState, useRef, useEffect } from 'react';
import styles from './Popup.module.css';

const Popup = React.forwardRef((props, ref) => {
    const { children } = props;
    return (
        <div className={styles.popupContainer}>
            <div ref={ref} className={styles.popupRow}>
                {children}
            </div>
        </div>
    );
});

export default Popup;
