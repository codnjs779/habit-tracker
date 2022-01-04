import React, { useState } from "react";

const SimpleHabit = () => {
    const [count, setCount] = useState({ count: 0 });
    console.log(`count, ${count.count}`);
    const handleIncrement = () => {
        setCount({ count: count.count + 1 });
    };

    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count.count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};
export default SimpleHabit;
