const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "Content-Type": "application/json",
        };
    }

    const user = JSON.parse(localStorage.getItem('auth'))

    if (user) {
        options.headers = {
            ...options.headers,
            'X-Authorization': user.accessToken
        }
    }

    return options;
};

const request = async (method, url, data) => {
    try {
        const response = await fetch(url, {
            ...buildOptions(data),
            method,
        });

        if (!response.ok) {
            throw new Error("Invalid data!");
        }

        if (response.status === 204) {
            return response.status
        }

        const result = await response.json();

        return result;
    } catch (error) {
        alert(error.message);
    }
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const patch = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
