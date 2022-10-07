import React, { useState } from 'react';
import styles from './AddIncomeType.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import SelectIcon from '../../AdminComponents/SelectIcon';

const AddIncomeType = ({ onSubmitHandler }) => {
    const [iconName, setIconName] = useState('');

    const onSetIconHandler = (iconName) => {
        setIconName(iconName);
    };
    return (
        <>
            <h3>Add Income Type</h3>
            <form
                className={styles.formSubmission}
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitHandler(e, 'addTypeOfIncome', iconName);
                }}
            >
                <SelectIcon onSet={onSetIconHandler} />
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
                    name='prognose'
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
