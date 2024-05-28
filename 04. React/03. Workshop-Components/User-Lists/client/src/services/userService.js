const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
    try {
        const fetchData = await fetch(baseUrl);
        if (!fetchData.ok) {
            throw new Error(`HTTP error! Status: ${fetchData.status}`);
        }
        const data = await fetchData.json();
        return Object.values(data);
    } catch (error) {
        console.error("Fetch error:", error);
        throw error
    }
};

export const getOne = async (userId) => {
    const fetchData = await fetch(baseUrl + `/${userId}`)
    const user = await fetchData.json()
    return user
} 
