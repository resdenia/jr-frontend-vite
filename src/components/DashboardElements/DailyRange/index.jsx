import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import { ReactComponent as ReactCalendar } from '../../../assets/authArea/calendar.svg';

import 'react-calendar/dist/Calendar.css';
import styles from './DailyRange.module.css';

const DailyRange = ({ onChangeHandler }) => {
    const [value, onChange] = useState(new Date());
    const [visibleCalendar, setVisibleCalendar] = useState(false);
    const ref = useRef(null);

    const displayProperDateFormat = () => {
        if (value.length && value.length > 1) {
            return (
                <>
                    {value[0].getDate()}/{value[0].getMonth()}/
                    {value[0].getFullYear()} - {value[1].getDate()}/
                    {value[1].getMonth()}/{value[1].getFullYear()}
                </>
            );
        } else if (value.length === 1) {
            return (
                <>
                    {value[0].getDate()}/{value[0].getMonth()}/
                    {value[0].getFullYear()} - ...
                </>
            );
        } else {
            return (
                <>
                    {value.getDate()}/{value.getMonth()}/{value.getFullYear()}
                </>
            );
        }
    };
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisibleCalendar(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <>
            <div className={styles.rangeContainer}>
                <div className={styles.dateWrappController}>
                    <div
                        className={styles.dateWrapp}
                        onClick={() => {
                            setVisibleCalendar((prevState) => !prevState);
                        }}
                    >
                        <ReactCalendar />
                        <span className={styles.dateWrapp}>
                            {displayProperDateFormat()}
                        </span>
                    </div>
                </div>

                <div ref={ref} className={styles.calendarWrapp}>
                    {visibleCalendar ? (
                        <>
                            <Calendar
                                onChange={(data) => {
                                    onChange(data);
                                    onChangeHandler(data);
                                }}
                                value={value}
                                allowPartialRange={true}
                                returnValue={'range'}
                                selectRange={true}
                            />
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </>
    );
};

export default DailyRange;
