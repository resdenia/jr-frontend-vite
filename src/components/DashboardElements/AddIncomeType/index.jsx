import React from 'react';
import styles from './AddIncomeType.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import SelectIcon from '../../AdminComponents/SelectIcon';

const AddIncomeType = ({ onSubmitHandler }) => {
    return (
        <>
            <h3>Add Income Type</h3>
            <form
                className={styles.formSubmission}
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitHandler(e, 'addIncomeType');
                }}
            >
                <SelectIcon />
                <Input
                    labelName='Type of Income'
                    inputPlaceholder='Salary, other'
                    type='text'
                    name='name'
                />
                <Input
                    labelName='Prognose'
                    inputPlaceholder='Monthly, etc'
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

export default AddIncomeType;
