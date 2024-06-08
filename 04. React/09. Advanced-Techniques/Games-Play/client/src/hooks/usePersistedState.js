import { useState } from "react";

function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistateState = localStorage.getItem(key);

        if (persistateState) {
            return JSON.parse(persistateState);
        }

        return defaultValue;
    });

    const setPersistateState = (value) => {
        setState(value);

        let serelizedValue;
        if (typeof value === "function") {
            serelizedValue = JSON.stringify(value(state));
        } else {
            serelizedValue = JSON.stringify(value);
        }
        localStorage.setItem(key, serelizedValue);
    };

    return [state, setPersistateState];
}

export default usePersistedState;
