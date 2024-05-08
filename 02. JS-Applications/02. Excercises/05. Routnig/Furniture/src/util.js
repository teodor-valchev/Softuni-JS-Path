export function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"));
}
export function clearUserData() {
    sessionStorage.removeItem("userData");
}

export function setUserData(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}
