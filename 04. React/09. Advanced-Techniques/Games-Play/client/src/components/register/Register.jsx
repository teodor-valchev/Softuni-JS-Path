import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import Path from "../../paths";

const RegisterKeys = {
    Email: "email",
    Password: "password",
    RepeatPassword: "confirm-password",
};

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext)
    const { values, onChange, onFormSubmit } = useForm(registerSubmitHandler, {
        [RegisterKeys.Email]: "",
        [RegisterKeys.Password]: "",
        [RegisterKeys.RepeatPassword]: "",
    });
    
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onFormSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={RegisterKeys.Email}
                        placeholder="maria@email.com"
                        onChange={onChange}
                        value={values[RegisterKeys.Email]}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name={RegisterKeys.Password}
                        id="register-password"
                        onChange={onChange}
                        value={values[RegisterKeys.Password]}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name={RegisterKeys.RepeatPassword}
                        id="confirm-password"
                        onChange={onChange}
                        value={values[RegisterKeys.RepeatPassword]}
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />

                    <p className="field">
                        <span>
                            If you already have profile click{" "}
                            <Link href={Path.Login}>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Register;
