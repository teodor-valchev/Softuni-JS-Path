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
        throw error;
    }
};

export const getOne = async (userId) => {
    const fetchData = await fetch(baseUrl + `/${userId}`);
    const user = await fetchData.json();
    return user;
};

export const deleteUser = async (userId) => {
    await fetch(baseUrl + `/${userId}`, {
        method: "DELETE",
    });
    return;
};

export const createUser = async (userData) => {
    const data = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        imageUrl: userData.imageUrl,
        address: {
            country: userData.country,
            city: userData.city,
            street: userData.street,
            streetNumber: userData.streetNumber,
        },
    };
    const newUser = await fetch("http://localhost:3030/jsonstore/users", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });

    const result = await newUser.json();

    return result;
};

export const editUser = async (userId, newData) => {
    const currentUser = await getOne(userId)
    const editedData = {
        _id: userId,
        firstName: newData.firstName,
        lastName: newData.lastName,
        email: newData.email,
        createdAt: currentUser.createdAt,
        phoneNumber: newData.phoneNumber,//created at?
        updatedAt: new Date().toISOString(),
        imageUrl: newData.imageUrl,
        address: {
            country: newData.country,
            city: newData.city,
            street: newData.street,
            streetNumber: newData.streetNumber,
        },
    };

    const fetchData = await fetch(baseUrl + `/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedData)
    })

    const jsonData = await fetchData.json();
    
    return jsonData
}
