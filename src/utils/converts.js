function _toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
}

export const convertDataTrigger = (incomes, expences) => {
    console.log(incomes);
    const convertedData = [];

    //converted Data incomes
    incomes.map((income) => {
        const mainId = income.date.slice(0, 9).split('-').join('_');
        const mainDate = income.date.slice(0, 9);
        const incomeFilteredI = convertedData.filter(
            (item) => item[mainId] === 0,
        );

        if (!incomeFiltered) {
            convertedData.push({
                name: mainDate,
                [mainId]: 0,
                income: income.amount,
                expence: 0,
            });
        } else {
            incomeFiltered.income = incomeFiltered.income + income.amount;
        }
    });

    //converted Data expences

    const exampleData = {
        name: '16-10-2022',
        income: 3000,
        expence: 4000,
    };

    const exampleData_v2 = {
        name: '17-10-2022',
        income: 3000,
        expence: 4000,
    };

    return [exampleData, exampleData_v2];
};
