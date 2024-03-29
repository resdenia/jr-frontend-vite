import React, { useState, useEffect, useCallback } from 'react';
import styles from './ViewTriggers.module.css';
import {
    LineChart,
    CartesianGrid,
    Line,
    Tooltip,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';

import { convertDataTrigger } from '../../../utils/converts';

const ViewTriggers = ({ expences, incomes }) => {
    const [displayData, setDisplayData] = useState([]);
    const populateData = useCallback(() => {
        setDisplayData([...convertDataTrigger(incomes, expences)]);
    }, [displayData]);

    useEffect(() => {
        populateData();
        console.log('isUPdated?');
    }, [incomes, expences]);

    return (
        <div className={styles.wrapperInfo}>
            {displayData ? (
                <ResponsiveContainer width={'100%'} height={250}>
                    <LineChart
                        data={displayData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type='monotone'
                            dataKey='income'
                            stroke='#8884d8'
                        />
                        <Line
                            type='monotone'
                            dataKey='expence'
                            stroke='#82ca9d'
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                '1'
            )}
        </div>
    );
};

export default ViewTriggers;
