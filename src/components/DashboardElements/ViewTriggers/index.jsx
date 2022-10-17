import React from 'react';
import styles from './Summary.module.css';
import {
    LineChart,
    CartesianGrid,
    Line,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Summary = ({ incomes, expences }) => {
    return (
        <div className={styles.wrapperInfo}>
            <ResponsiveContainer>
                <LineChart
                    width={700}
                    height={250}
                    // data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    {/* <XAxis dataKey='name' />
                                <YAxis /> */}
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#8884d8' />
                    <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Summary;
