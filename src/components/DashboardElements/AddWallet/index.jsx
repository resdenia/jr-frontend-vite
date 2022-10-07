import React, { useState } from 'react';
import styles from './AddWallet.module.css';
import Input from '../../Input';
import Button from '../../AdminComponents/Button';
import SelectIcon from '../../AdminComponents/SelectIcon';

const AddWallet = ({ onSubmitHandler }) => {
    const [iconName, setIconName] = useState('');

    const onSetIconHandler = (iconName) => {
        setIconName(iconName);
    };
    return (
        <>
            <h3>Add Wallet</h3>
            <form
                className={styles.formSubmission}
                onSubmit={(e) => {
                    e.preventDefault();
                    const additionalData = {
                        iconName,
                    };
                    onSubmitHandler(e, 'addWallet', additionalData);
                }}
            >
                <SelectIcon onSet={onSetIconHandler} />
                <Input
                    labelName='Name of Wallet'
                    inputPlaceholder='Name of Wallet'
                    type='text'
                    name='name'
                />
                <Input
                    labelName='Amount'
                    inputPlaceholder='Amount'
                    type='number'
                    name='amount'
                />
                <Button
                    className='buttonSubmission'
                    type='submit'
                    content='Add Wallet'
                />
            </form>
        </>
    );
};

export default AddWallet;
