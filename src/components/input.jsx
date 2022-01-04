import React, { memo, useRef } from "react";

const Input = memo(({ onAdd }) => {
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && onAdd(name);
        inputRef.current.value = "";
    };
    return (
        <>
            <form className="add-form" onSubmit={onSubmit}>
                <input className="add-input" type="text" placeholder="Habit" ref={inputRef} />
                <button className="add-button" type="submit">
                    Add
                </button>
            </form>
        </>
    );
});

export default Input;
