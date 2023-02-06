function _toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
}
function compare(a, b) {
    if (a.timeStamp < b.timeStamp) {
        return -1;
    }
    if (a.timeStamp > b.timeStamp) {
        return 1;
    }
    return 0;
}
export const convertDataTrigger = (incomes, expences) => {
    const convertedData = [];

    //converted Data incomes
    incomes.map((income) => {
        const dateTimestamp = _toTimestamp(income.date);
        const mainId = income.date.slice(0, 9).split('-').join('_');
        const mainDate = income.date.slice(0, 9);
        const incomeFiltered = convertedData.filter(
            (item) => item.timeStamp === dateTimestamp,
        );

        if (incomeFiltered.length === 0) {
            convertedData.push({
                name: mainDate,
                timeStamp: dateTimestamp,
                [mainId]: dateTimestamp,
                income: income.amount,
                expence: 0,
            });
        } else {
            incomeFiltered[0].income = incomeFiltered[0].income + income.amount;
        }
    });
    expences.map((expence) => {
        const dateTimestamp = _toTimestamp(expence.date);

        const mainId = expence.date.slice(0, 10).split('-').join('_');
        const mainDate = expence.date.slice(0, 10);
        const expenceFiltered = convertedData.filter(
            (item) => item.timeStamp === dateTimestamp,
        );

        if (expenceFiltered.length === 0) {
            convertedData.push({
                name: mainDate,
                timeStamp: dateTimestamp,
                [mainId]: dateTimestamp,
                income: 0,
                expence: expence.amount,
            });
        } else {
            expenceFiltered[0].expence =
                expenceFiltered[0].expence + expence.amount;
        }
    });
    //converted Data expences

    console.log(convertedData);
    return convertedData.sort(compare);
};
