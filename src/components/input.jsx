import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <>
                <form>
                    <input type="text" placeholder="Habit" />
                    <button type="submit">Add</button>
                </form>
            </>
        );
    }
}

export default Input;
