
import { renderLogin } from './login.js'
import { AuthUser } from './auth.js';

export function logout() {
    localStorage.removeItem("X-Authorization");
    AuthUser();
    renderLogin();
}