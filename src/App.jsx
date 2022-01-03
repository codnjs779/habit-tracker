import "./App.css";
import Habits from "./components/habits";
import Nav from "./components/nav";
import React, { Component } from "react";

class App extends Component {
    state = {
        habits: [
            { id: 0, name: "Running", count: 0 },
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Coding", count: 0 },
        ],
    };

    handleIncrease = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        });

        this.setState({ habits: habits });
    };

    handleDecrease = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        });

        this.setState({ habits: habits });
    };

    handleDelete = (habit) => {
        // habit으로 넘겨받은 id와 동일하지 않는 객체들로 새 배열을 만들기
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
        console.log("delete", habits);
    };

    handleAdd = (name) => {
        // 1. 항상 복사해줘야함 -> 복사 후 해당 obj를 배열에 추가 !! 핵심 핵심
        // 2. 다음 단계로 setState를 이용해서 state를 업뎃 해줘야함
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
        this.setState({ habits });
    };

    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            if (habit.count !== 0) {
                console.log("test");
                return { ...habit, count: 0 };
            }
            return habit;
        });
        this.setState({ habits });
    };
    render() {
        return (
            <>
                <Nav totalCount={this.state.habits.filter((item) => item.count > 0).length} />

                <Habits
                    state={this.state}
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                    handleDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />

                <button className="resetBtn" onClick={this.handleReset}>
                    Reset All
                </button>
            </>
        );
    }
}

export default App;
