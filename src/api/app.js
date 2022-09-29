class Budget {
    constructor() {
        this.baseUrl = 'http://localhost:6001';
    }
    checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        } else {
        }
    };

    customFetch = async (slug, body, method, headers) => {
        const bodyDisplay = body ? body : {};
        if (body) {
        }
        const headerToSend = headers ? headers : {};
        return await fetch(`${this.baseUrl}/${slug}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headerToSend,
            },
            body: bodyDisplay,
        });
    };
    addWallet = async (body) => {
        console.log('here');
        const token = localStorage.getItem('jwtToken');
        return await this.customFetch('api/wallet/add', body, 'POST', {
            Authorization: `Bearer ${token}`,
        });
    };
}

const budget = new Budget();

export default budget;
