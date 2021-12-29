import React, { Component } from "react";

class Habit extends Component {
    state = {
        count: 0,
    };
    handleIncrease = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    handleDecrease = () => {
        const count = this.state.count - 1;
        this.setState({
            count: count < 0 ? 0 : count,
        });
    };
    handleDelete = () => {
        console.log("hello");
    };

    render() {
        console.log();
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habitBtn habit-increase" onClick={this.handleIncrease}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habitBtn habit-decrease" onClick={this.handleDecrease}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habitBtn habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
