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
                    <AddIncomeType />
                </Popup>
            );

        case 'addExpenceType':
            return (
                <Popup ref={ref}>
                    <AddRegularExpence />
                </Popup>
            );

        case 'addIncome':
            return (
                <Popup ref={ref}>
                    <AddIncome />
                </Popup>
            );

        case 'addExpence':
            return (
                <Popup ref={ref}>
                    <AddExpence />
                </Popup>
            );

        default:
    }
});

export default PopupWithForm;
