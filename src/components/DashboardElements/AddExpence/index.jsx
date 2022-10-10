import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/user/userContext';
import styles from './AddExpence.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import InputDate from '../InputDate';
import Select from '../../AdminComponents/Select';

const AddExpence = ({ onSubmitHandler }) => {
    const { wallets, typeOfExpence, user } = useContext(UserContext);
    const [choosedWallet, setChoosedWallet] = useState(null);
    const [dateInput, setDateInput] = useState(null);
    const [choosedType, setChoosedType] = useState(null);
    const walletHandler = (value) => {
        setChoosedWallet(value);
    };

    const typeHandler = (value) => {
        setChoosedType(value);
    };
    const datePicker = (data) => {
        console.log(data);
        setDateInput(data);
    };
    return (
        <>
            <h3>Add Expence</h3>
            <form
                className={styles.formSubmission}
                onSubmit={(e) => {
                    e.preventDefault();

                    const additionalData = {
                        walletId: choosedWallet,
                        typeOfExpenceId: choosedType,
                        date: dateInput,
                    };

                    onSubmitHandler(e, 'addExpence', additionalData);
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
                    onClick={typeHandler}
                />

                <InputDate
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
