import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/user/userContext';

import styles from './AddIncome.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import DailyRange from '../DailyRange';
import Select from '../../AdminComponents/Select';

const AddIncome = ({ onSubmitHandler }) => {
    const { wallets, typeOfIncome } = useContext(UserContext);
    const [choosedWallet, setChoosedWallet] = useState(null);
    const [choosedType, setChoosedType] = useState(null);
    const walletHandler = (value) => {
        setChoosedWallet(value);
    };

    const expenceTypeHandler = (value) => {
        setChoosedType(value);
    };
    const datePicker = (data) => {
        console.log(data);
    };
    return (
        <>
            <h3>Add Income</h3>
            <form
                className={styles.formSubmission}
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitHandler(e, 'addIncome');
                }}
            >
                <Select
                    options={wallets}
                    label='Wallet'
                    onClick={walletHandler}
                />
                <Select
                    options={typeOfIncome}
                    label='Type'
                    onClick={expenceTypeHandler}
                />

                <DailyRange
                    onChangeHandler={(data) => {
                        datePicker(data);
                    }}
                />
                <Input
                    labelName='Income'
                    inputPlaceholder='1'
                    type='number'
                    name='amount'
                />
                <Button
                    className='buttonSubmission'
                    type='submit'
                    content='Add Income Type'
                />
            </form>
        </>
    );
};

export default AddIncome;
