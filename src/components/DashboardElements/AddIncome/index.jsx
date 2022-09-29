import React from 'react';
import styles from './AddIncome.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import DailyRange from '../DailyRange';

const AddIncome = ({ onSubmitHandler }) => {
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
                <p>Choose Wallet</p>
                <p>Choose Type</p>

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
