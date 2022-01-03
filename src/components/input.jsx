import React, { PureComponent } from "react";

class Input extends PureComponent {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = "";
    };

    render() {
        console.log("input");
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
