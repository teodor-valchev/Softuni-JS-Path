const registerForm = document.querySelector("#form-sign-up");
const registerUrl = "http://localhost:3030/users/register";

export function renderRegister() {
    registerForm.style.display = "block";
}

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    if ((email === '' || password === '' || repeatPassword === '') && (password !== repeatPassword) && password.length >= 6) {
        return;
    }

    let data = {
        email,
        password,
        repeatPassword
    }

    fetch(registerUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then((user) => {
        localStorage.setItem('email', user.email)
        localStorage.setItem("X-Authorization", user.accessToken);
    });
    
    location.href = "http://127.0.0.1:5500/02.Movies/";
})
