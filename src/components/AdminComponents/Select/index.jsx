import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

const renderOptions = (options, onSet, setVisibleSelect, setPreview) => {
    return options.map((option, id) => {
        return (
            <div
                onClick={() => {
                    onSet(option._id);
                    setVisibleSelect(false);
                    setPreview(option.name);
                }}
                className={styles.elementWrapper}
                key={`$_${option._id}`}
            >
                {option.name}
            </div>
        );
    });
};

const Select = ({ options, onClick, label }) => {
    const [preview, setPreview] = useState('Choose option');
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
            <div className={styles.selectLabel}>Select {label}</div>
            <div className={styles.selectContainer} onClick={handlerOpenSelect}>
                {preview ? <div className={styles.preview}>{preview}</div> : ''}
            </div>

            {visibleSelect ? (
                <div className={styles.listDropDown} ref={ref}>
                    <div className={styles.iconContainer}>
                        {renderOptions(
                            options,
                            onClick,
                            setVisibleSelect,
                            setPreview,
                        )}
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default Select;
