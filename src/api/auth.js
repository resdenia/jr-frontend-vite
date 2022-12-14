class Auth {
    constructor() {
        this.baseUrl = 'http://localhost:6001';
        this.token = localStorage.getItem('jwtToken');
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

    getUser = async (body) => {
        return await this.customFetch('api/auth/currentUser', body, 'POST', {
            Authorization: `Bearer ${this.token}`,
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
