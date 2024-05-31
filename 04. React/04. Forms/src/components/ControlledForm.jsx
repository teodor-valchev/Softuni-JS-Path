import { useState } from "react";
import styles from "./ControlledForm.module.css";

const initialStateErrors = {
    firstName: false,
    lastName: false,
    email:false
};

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
};

export default function MyControlledForm() {
    const [errors, setErrors] = useState(initialStateErrors);
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    // adding state foreach input
    // const [userNameValue, setUsernameValue] = useState("");
    // const [passwordValue, setPasswordValue] = useState("");

    // const userNameOnChangeHandler = (e) => {
    //     setUsernameValue(e.currentTarget.value);
    // };

    // const passwordOnChangeHandler = (e) => {
    //     setPasswordValue(e.target.value);
    // };

    const OnChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormState((state) => ({ ...state, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (formState.firstName.length < 5) {
            setErrors((errors) => ({ ...errors, 'firstName': true }));
        }
        if (formState.lastName.length < 5) {
            setErrors((errors) => ({ ...errors, 'lastName': true }));
        } if (formState.email.length < 5) {
            setErrors((errors) => ({ ...errors, 'email': true }));
        } else {
            setErrors(initialStateErrors);
            setFormState(initialFormState)
        }
    };

    return (
        <div className="main-form">
            <form onSubmit={onSubmitHandler} className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic">
                    <input
                        id="firstname"
                        className={`input ${
                            errors.firstName ? styles["error-color"] : ""
                        }`}
                        type="text"
                        placeholder=" "
                        name="firstName"
                        onChange={OnChangeHandler}
                        value={formState.firstName}
                    />
                    {errors.firstName && (
                        <span className={styles["error-msg"]}>
                            Name should be more than five characters!
                        </span>
                    )}
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">
                        First name
                    </label>
                </div>
                <div className="input-container ic">
                    <input
                        id="lastname"
                        className={`input ${
                            errors.lastName ? styles["error-color"] : ""
                        }`}
                        type="text"
                        placeholder=""
                        name="lastName"
                        onChange={OnChangeHandler}
                        value={formState.lastName}
                    />
                    {}
                    {errors.lastName && (
                        <span className={styles["error-msg"]}>
                            Name should be more than five characters!
                        </span>
                    )}
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">
                        Last name
                    </label>
                </div>
                <div className="input-container ic-last">
                    <input
                        id="email"
                        className={`input ${
                            errors.email ? styles["error-color"] : ""
                        }`}
                        type="text"
                        placeholder=""
                        name="email"
                        onChange={OnChangeHandler}
                        value={formState.email}
                    />
                    {errors.email && (
                        <span className={styles["error-msg"]}>
                            Email should be more than five characters!
                        </span>
                    )}
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder">
                        Email
                    </label>
                </div>
                <button type="submit" className="submit">
                    submit
                </button>
            </form>
        </div>
    );
}
