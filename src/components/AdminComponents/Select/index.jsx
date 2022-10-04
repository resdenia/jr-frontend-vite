import React, { useState, useRef, useEffect } from 'react';

const renderOptions = (options, onSet, setVisibleSelect) => {
    return options.map((option, id) => {
        return (
            <div
                onClick={() => {
                    onSet(option.value);
                    setVisibleSelect(false);
                }}
                className={styles.iconWrapper}
                key={`${key}_${id}`}
            >
                {option.name}
            </div>
        );
    });
};

const Select = ({ options, onClick, label }) => {
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
                Select {label}
            </div>

            {visibleSelect ? (
                <div className={styles.listDropDown} ref={ref}>
                    <h3>{label}</h3>
                    <div className={styles.iconContainer}>
                        {renderOptions(options, onClick, setVisibleSelect)}
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default Select;
