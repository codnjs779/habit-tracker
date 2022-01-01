import React, { Component } from "react";

class Input extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = "";
    };

    render() {
        return (
            <>
                <form className="add-form" onSubmit={this.onSubmit}>
                    <input className="add-input" type="text" placeholder="Habit" ref={this.inputRef} />
                    <button className="add-button" type="submit">
                        Add
                    </button>
                </form>
            </>
        );
    }
}

export default Input;
