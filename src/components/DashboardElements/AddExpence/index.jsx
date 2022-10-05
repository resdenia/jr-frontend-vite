import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/user/userContext';
import styles from './AddExpence.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import DailyRange from '../DailyRange';
import Select from '../../AdminComponents/Select';

const AddExpence = ({ onSubmitHandler }) => {
    const { wallets, typeOfExpence } = useContext(UserContext);
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
            <h3>Add Expence</h3>
            <form
                className={styles.formSubmission}
                onSubmit={(e) => {
                    e.preventDefault();
                    e.target['wallet'].value = choosedWallet;
                    onSubmitHandler(e, 'addExpence');
                }}
            >
                {/* <p>{choosedWallet ? choosedWallet : 'Choose Wallet'}</p> */}
                <Select
                    options={wallets}
                    label='Wallet'
                    onClick={walletHandler}
                />
                <Select
                    options={typeOfExpence}
                    label='Type'
                    onClick={expenceTypeHandler}
                />

                <DailyRange
                    onChangeHandler={(data) => {
                        datePicker(data);
                    }}
                />
                <Input
                    labelName='Expence'
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

export default AddExpence;
