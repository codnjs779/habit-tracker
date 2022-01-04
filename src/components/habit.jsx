import React, { memo } from "react";

const Habit = memo(({ habit, onIncrease, onDecrease, onDelete }) => {
    const { name, count } = habit;

    const handleIncrease = () => {
        onIncrease(habit);
    };

    const handleDecrease = () => {
        onDecrease(habit);
    };

    const handleDelete = () => {
        onDelete(habit);
    };

    return (
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habitBtn habit-increase" onClick={handleIncrease}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habitBtn habit-decrease" onClick={handleDecrease}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habitBtn habit-delete" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
});
export default Habit;
