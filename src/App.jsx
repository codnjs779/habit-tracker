import "./App.css";
import Habits from "./components/habits";
import Nav from "./components/nav";
import Input from "./components/input";
import Reset from "./components/reset";
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
        // 리액트에서state를 직접 수정하는 것은 옳은 방법이 아니다. 아래와 같이 복사해서 수정하는 방법이 좋은 방법!
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits: habits });
    };

    handleDecrease = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);

        if (habit.count > 0) {
            habits[index].count--;
            this.setState({ habits });
        }
        return habit.count;
    };

    handleDelete = (habit) => {
        // habit으로 넘겨받은 id와 동일하지 않는 객체들로 새 배열을 만들기
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
        console.log("delete", habits);
    };
    render() {
        return (
            <>
                <Nav totalCount={this.state.habits.filter((item) => item.count > 0).length} />
                <Input />
                <Habits state={this.state} handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} handleDelete={this.handleDelete} />
                <Reset />
            </>
        );
    }
}

export default App;
