import React, { PureComponent } from "react";

class Habit extends PureComponent {
    handleIncrease = () => {
        this.props.onIncrease(this.props.habit);
    };
    handleDecrease = () => {
        this.props.onDecrease(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
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
