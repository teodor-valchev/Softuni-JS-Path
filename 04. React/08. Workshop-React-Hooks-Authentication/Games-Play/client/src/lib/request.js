const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "Content-Type": "application/json",
        };
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
