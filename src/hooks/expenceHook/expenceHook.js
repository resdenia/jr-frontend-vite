import { useQuery } from 'react-query';

import budget from '../../api/app';

const getExpence = async () => {
    const token = localStorage.getItem('jwtToken');
    return await budget.getExpence(token);
};

export const useExpence = () => {
    const fallback = [];
    const { data = fallback } = useQuery('expences', getExpence, {
        staleTime: 2000,
    });
    return data;
};

export const addExpence = async (date, amount, walletId, typeOfExpenceId) => {
    return budget.addExpence(
        JSON.stringify({ date, amount, walletId, typeOfExpenceId }),
    );
};
