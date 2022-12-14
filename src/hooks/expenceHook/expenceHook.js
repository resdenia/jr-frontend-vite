import { useQuery } from 'react-query';

import budget from '../../api/app';

const getExpence = async () => {
    return await budget.getExpence();
};

export const useExpence = () => {
    const fallback = [];
    const { data = fallback } = useQuery('expences', getExpence);
    return data;
};
