class Budget {
    constructor() {
        this.baseUrl = 'http://localhost:6001';
        this.token = localStorage.getItem('jwtToken');
    }
    checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Something went wrong');
        }
    };

    customFetch = async (slug, body, method, headers) => {
        const bodyDisplay = body ? body : {};
        if (body) {
        }
        const headerToSend = headers ? headers : {};
        const res = await fetch(`${this.baseUrl}/${slug}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headerToSend,
            },
            ...(method !== 'GET' ? { body: bodyDisplay } : {}),
        });
        return this.checkResponse(res);
    };
    addWallet = async (body) => {
        return await this.customFetch('api/wallet/add', body, 'POST', {
            Authorization: `Bearer ${this.token}`,
        });
    };
    addIncome = async (body) => {
        console.log(body);
        return await this.customFetch('api/income', body, 'POST', {
            Authorization: `Bearer ${this.token}`,
        });
    };
    addExpence = async (body) => {
        return await this.customFetch('api/expence', body, 'POST', {
            Authorization: `Bearer ${this.token}`,
        });
    };
    addTypeOfExpence = async (body) => {
        return await this.customFetch('api/type-expence', body, 'POST', {
            Authorization: `Bearer ${this.token}`,
        });
    };
    addTypeOfIncome = async (body) => {
        return await this.customFetch('api/type-income', body, 'POST', {
            Authorization: `Bearer ${this.token}`,
        });
    };
    getIncome = async () => {
        return await this.customFetch('api/incomes', {}, 'GET', {
            Authorization: `Bearer ${this.token}`,
        });
    };
    getExpence = async () => {
        return await this.customFetch('api/expences', {}, 'GET', {
            Authorization: `Bearer ${this.token}`,
        });
    };
}

const budget = new Budget();

export default budget;
