import React, { useContext } from 'react';
import { UserContext } from '../../../context/user/userContext';
import styles from './AddExpence.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import DailyRange from '../DailyRange';
import Select from '../../AdminComponents/Select';
const AddExpence = ({ onSubmitHandler }) => {
    const { wallets, typeOfExpence } = useContext(UserContext);
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
                    onSubmitHandler(e, 'addExpence');
                }}
            >
                <p>Choose Wallet</p>
                <Select />
                <Select />
                <p>Choose Type</p>

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
