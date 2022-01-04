import "./App.css";
import Habits from "./components/habits";
import Nav from "./components/nav";
import React, { useState } from "react";

const App = () => {
    const [habits, setHabits] = useState([
        { id: 0, name: "Running", count: 0 },
        { id: 1, name: "Reading", count: 0 },
        { id: 2, name: "Coding", count: 0 },
    ]);

    const handleIncrease = (habit) => {
        setHabits((habits) =>
            habits.map((item) => {
                if (item.id === habit.id) {
                    return { ...habit, count: habit.count + 1 };
                }
                return item;
            })
        );
    };

    const handleDecrease = (habit) => {
        setHabits((habits) =>
            habits.map((item) => {
                if (item.id === habit.id) {
                    const count = habit.count - 1;
                    return { ...habit, count: count < 0 ? 0 : count };
                }
                return item;
            })
        );
    };

    const handleDelete = (habit) => {
        // habit으로 넘겨받은 id와 동일하지 않는 객체들로 새 배열을 만들기
        setHabits((habits) => habits.filter((item) => item.id !== habit.id));
    };

    const handleAdd = (name) => {
        // 1. 항상 복사해줘야함 -> 복사 후 해당 obj를 배열에 추가 !! 핵심 핵심
        // 2. 다음 단계로 setState를 이용해서 state를 업뎃 해줘야함
        setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
    };

    const handleReset = () => {
        setHabits((habits) =>
            habits.map((habit) => {
                if (habit.count !== 0) {
                    return { ...habit, count: 0 };
                }
                return habit;
            })
        );
    };

    return (
        <>
            <Nav totalCount={habits.filter((item) => item.count > 0).length} />

            <Habits habits={habits} onIncrease={handleIncrease} onDecrease={handleDecrease} onDelete={handleDelete} onAdd={handleAdd} onReset={handleReset} />

            <button className="resetBtn" onClick={handleReset}>
                Reset All
            </button>
        </>
    );
};

export default App;
