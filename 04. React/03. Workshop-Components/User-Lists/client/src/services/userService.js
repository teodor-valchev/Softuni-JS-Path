const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
    const fetchData = await fetch(baseUrl);
    const data = await fetchData.json();
    return Object.values(data);
};
