import React from 'react';
import styles from './AddExpence.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import DailyRange from '../DailyRange';
import SelectIcon from '../../AdminComponents/SelectIcon';
const AddExpence = ({ onSubmitHandler }) => {
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
                <p>Choose income</p>
                <DailyRange
                    onChangeHandler={(data) => {
                        datePicker(data);
                    }}
                />
                <SelectIcon />
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
