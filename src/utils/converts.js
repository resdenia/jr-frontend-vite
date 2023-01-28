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
