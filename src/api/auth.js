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
        console.log(body);
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
            body: JSON.stringify(bodyDisplay),
        });
    };

    getUser = async (token) => {
        return await this.customFetch('api/auth/currentUser', {}, 'POST', {
            Authorization: `Bearer ${token}`,
        });
    };
    login = async (body) => {
        return await this.customFetch('api/auth/login', body, 'POST');
    };
    register = async (body) => {
        return await this.customFetch('api/auth/register', body, 'POST');
    };
}

const auth = new Auth();

export default auth;
