import React, { useState } from 'react';
import styles from './AddRegularExpence.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import SelectIcon from '../../AdminComponents/SelectIcon';

const AddRegularExpence = ({ onSubmitHandler }) => {
    const [iconName, setIconName] = useState('');

    const onSetIconHandler = (iconName) => {
        setIconName(iconName);
    };
    return (
        <>
            <h3>Add Regular Expence</h3>
            <form
                className={styles.formSubmission}
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitHandler(e, 'addTypeOfExpence', iconName);
                }}
            >
                <SelectIcon onSet={onSetIconHandler} />
                <Input
                    labelName='Type of Expence'
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

export default AddRegularExpence;
