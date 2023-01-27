import { useQuery } from 'react-query';
import budget from '../../api/app';

const getIncome = async () => {
    const token = localStorage.getItem('jwtToken');
    return await budget.getIncome(token);
};

export const useIncome = () => {
    const fallback = [];
    const { data = fallback } = useQuery('incomes', getIncome, {
        staleTime: 2000,
    });
    return data;
};
export const addIncome = async ({ date, amount, walletId, typeOfIncomeId }) => {
    return budget.addIncome(
        JSON.stringify({ date, amount, walletId, typeOfIncomeId }),
    );
};
