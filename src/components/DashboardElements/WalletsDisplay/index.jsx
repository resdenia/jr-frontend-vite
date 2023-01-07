import React from 'react';
import styles from './WalletsDisplay.module.css';
import SparkChart from '../Charts/SparkChart';
import { IconArrow } from '../../../utils/iconLogic/iconListArrow';
import {
    LineChart,
    CartesianGrid,
    Line,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import NoData from '../../NoData';

// const dumpWallets = [
//     {
//         _id: 'someid101',

//         icon: 'credit',
//         name: 'DebitCard Israel',
//         amount: 15700,
//         type: 'money',
//     },
//     {
//         _id: 'someid102',

//         icon: 'car',
//         name: 'Credit Machine',
//         amount: 7000,
//         type: 'credit',
//     },
//     {
//         _id: 'someid100',
//         icon: 'credit',
//         name: 'DebitCard Ukraine',
//         amount: 15700,
//         type: 'money',
//     },

//     {
//         _id: 'someid105',
//         icon: 'home',
//         name: 'DebitCard Ukraine',
//         amount: 15700,
//         type: 'credit',
//     },
// ];

const WalletsDisplay = ({ wallets }) => {
    const renderBoxes = (wallets) => {
        console.log(wallets);
        return wallets.map((wallet) => {
            const IconDisplay = IconArrow[wallet.icon];

            return (
                <div key={wallet._id} className={styles.wallet}>
                    <div className={styles.wrapperWalletHeader}>
                        <div className={styles.wrapperHeaderTitle}>
                            <div className={styles.iconWrapper}>
                                <IconDisplay />
                            </div>
                            <div className={styles.wrapperTitle}>
                                {wallet.name}
                            </div>
                        </div>
                        <div className={styles.amountWallet}>
                            {wallet.type === 'credit' ? (
                                <span className={styles.moneyRed}>
                                    {wallet.balance}
                                </span>
                            ) : (
                                <span className={styles.moneyGreen}>
                                    {wallet.balance}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={styles.chart}>
                        <ResponsiveContainer>
                            <LineChart
                                width={300}
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
                                <Line
                                    type='monotone'
                                    dataKey='pv'
                                    stroke='#8884d8'
                                />
                                <Line
                                    type='monotone'
                                    dataKey='uv'
                                    stroke='#82ca9d'
                                />
                            </LineChart>
                        </ResponsiveContainer>

                        {/* <SparkChart /> */}
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <h2>Wallets</h2>
            {wallets ? (
                <div className={styles.wrapperWallets}>
                    {renderBoxes(wallets)}
                </div>
            ) : (
                <NoData />
            )}
        </div>
    );
};

export default WalletsDisplay;
