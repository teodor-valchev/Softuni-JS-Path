import { useState } from "react";

export default function MyControlledForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    }); // handling multiple fields with a single State

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // adding state foreach input
    // const [userNameValue, setUsernameValue] = useState("");
    // const [passwordValue, setPasswordValue] = useState("");

    // const userNameOnChangeHandler = (e) => {
    //     setUsernameValue(e.currentTarget.value);
    // };

    // const passwordOnChangeHandler = (e) => {
    //     setPasswordValue(e.target.value);
    // };

    const onFormSubmit = (e) => {
        e.preventDefault();
        alert(formData.username)
    };

    return (
        <>
            <h1>MyControlled Form</h1>

            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={onChangeHandler}
                        type="text"
                        value={formData.username}
                        name="username"
                        id="username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={onChangeHandler}
                        value={formData.password}
                        name="password"
                        id="password"
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                    <button type="button">Reset</button>
                </div>
            </form>
        </>
    );
}
