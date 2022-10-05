import React from 'react';
import Popup from '../../AdminComponents/Popup';
import AddWallet from '../AddWallet';
import AddIncomeType from '../AddIncomeType';
import AddIncome from '../AddIncome';
import AddRegularExpence from '../AddRegularExpence';
import AddExpence from '../AddExpence';

const PopupWithForm = React.forwardRef((props, ref) => {
    const { type, onSubmitHandler } = props;
    switch (type) {
        case 'addWallet':
            return (
                <Popup ref={ref}>
                    <AddWallet onSubmitHandler={onSubmitHandler} />
                </Popup>
            );

        case 'addIncomeType':
            return (
                <Popup ref={ref}>
                    <AddIncomeType onSubmitHandler={onSubmitHandler} />
                </Popup>
            );

        case 'addExpenceType':
            return (
                <Popup ref={ref}>
                    <AddRegularExpence onSubmitHandler={onSubmitHandler} />
                </Popup>
            );

        case 'addIncome':
            return (
                <Popup ref={ref}>
                    <AddIncome onSubmitHandler={onSubmitHandler} />
                </Popup>
            );

        case 'addExpence':
            return (
                <Popup ref={ref}>
                    <AddExpence onSubmitHandler={onSubmitHandler} />
                </Popup>
            );

        default:
    }
});

export default PopupWithForm;
