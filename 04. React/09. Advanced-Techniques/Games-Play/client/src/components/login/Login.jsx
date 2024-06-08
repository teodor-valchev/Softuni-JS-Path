
import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/authContext";
import { useForm } from "../../hooks/useForm";
import Path from "../../paths";

const LoginKeys = {
    Email: "email",
    Password: "password",
};

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onFormSubmit } = useForm( loginSubmitHandler, {
        [LoginKeys.Email]: "",
        [LoginKeys.Password]: "",
    });
    
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onFormSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginKeys.Email}
                        placeholder="Sokka@gmail.com"
                        onChange={onChange}
                        value={values[LoginKeys.Email]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginKeys.Password}
                        onChange={onChange}
                        value={values[LoginKeys.Password]}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to={Path.Register}>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Login;
