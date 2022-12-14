import React, { useState, useRef, useEffect } from 'react';
import { IconArrow } from '../../../utils/iconLogic/iconListArrow';

import styles from './SelectIcon.module.css';

const renderIcons = (Icons, onSet, setVisibleSelect) => {
    const keys = Object.keys(Icons);

    return keys.map((key, id) => {
        const IconDisplay = Icons[key];
        return (
            <div
                onClick={() => {
                    onSet(key);
                    setVisibleSelect(false);
                }}
                className={styles.iconWrapper}
                key={`${key}_${id}`}
            >
                <IconDisplay />
            </div>
        );
    });
};
const SelectIcon = ({ onSet }) => {
    const [preview, setPreview] = useState(null);
    const [visibleSelect, setVisibleSelect] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisibleSelect(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    const handlerOpenSelect = () => {
        setVisibleSelect(true);
    };
    return (
        <>
            <div className={styles.selectIconWrapper}>
                {preview ? <div className={styles.preview}>{preview}</div> : ''}
            </div>
            <div className={styles.buttonAdd} onClick={handlerOpenSelect}>
                {preview ? 'Update Icon' : 'Add Icon'}
            </div>

            {visibleSelect ? (
                <div className={styles.listDropDown} ref={ref}>
                    <h3>Icons</h3>
                    <div className={styles.iconContainer}>
                        {renderIcons(IconArrow, onSet, setVisibleSelect)}
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default SelectIcon;
