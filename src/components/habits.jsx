import Habit from "./habit";
import Input from "./input";
import React from "react";

const Habits = ({ habits, onIncrease, onDecrease, onDelete, onAdd }) => {
    const handleIncrease = (habit) => {
        onIncrease(habit);
    };

    const handleDecrease = (habit) => {
        onDecrease(habit);
    };

    const handleDelete = (habit) => {
        onDelete(habit);
    };

    const handleAdd = (name) => {
        onAdd(name);
    };

    return (
        <>
            <Input onAdd={handleAdd} />
            <ul>
                {habits.map((habit) => (
                    <Habit habit={habit} key={habit.id} onIncrease={handleIncrease} onDecrease={handleDecrease} onDelete={handleDelete} />
                ))}
            </ul>
        </>
    );
};

export default Habits;
