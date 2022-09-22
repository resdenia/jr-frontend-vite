class Auth {
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
        return await fetch(`${this.baseUrl}/${slug}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(headers ? headers : {}),
            },
            body: {
                ...(body ? body : {}),
            },
        });
    };

    getUser = () => {};
    login = () => {};
    register = () => {};
}

const auth = new Auth();

export default auth;
