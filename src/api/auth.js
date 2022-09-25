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
        return await fetch(`${this.baseUrl}/${slug}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(headers ? headers : {}),
            },
            body: bodyDisplay,
        });
    };

    getUser = () => {};
    login = () => {};
    register = async (body) => {
        return await this.customFetch('api/auth/register', body, 'POST');
    };
}

const auth = new Auth();

export default auth;
