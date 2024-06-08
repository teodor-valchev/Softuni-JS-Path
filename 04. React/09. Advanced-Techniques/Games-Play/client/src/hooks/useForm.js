import { useState } from "react";

export function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((state) => ({ ...state, [name]: value }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
        setValues(initialValues)
    };

    return {
        values,
        onChange,
        onFormSubmit,
    };
}
