import React, { memo } from "react";

const Input = memo((props) => {
    console.log("dd");
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
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
