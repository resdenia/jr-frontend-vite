import { useQuery } from 'react-query';
import budget from '../../api/app';

const getIncome = async () => {
    return await budget.getIncome();
};

export const useIncome = () => {
    const fallback = [];
    const { data = fallback } = useQuery('incomes', getIncome, {
        staleTime: 2000,
    });
    return data;
};
