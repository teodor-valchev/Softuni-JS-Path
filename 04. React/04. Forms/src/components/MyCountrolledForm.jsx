import { useState } from "react";

export default function MyControlledForm() {
    const [userNameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const userNameOnChangeHandler = (e) => {
        setUsernameValue(e.currentTarget.value);
    };

    const passwordOnChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <h1>MyControlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={userNameOnChangeHandler}
                        type="text"
                        value={userNameValue}
                        name="username"
                        id="username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={passwordOnChangeHandler}
                        value={passwordValue}
                        name="password"
                        id="password"
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" />
                </div>
                <div>
                    <button type="submit" onClick={onFormSubmit}>
                        Register
                    </button>
                    <button type="button">Reset</button>
                </div>
            </form>
        </>
    );
}
