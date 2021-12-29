import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    // data를 가지고 있는 곳에서 데이터를 수정할 수 있는 함수를 만들어주는 구조가 가장 바람직 함

    state = {
        habits: [
            { id: 0, name: "Running", count: 0 },
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Coding", count: 0 },
        ],
    };

    render() {
        return (
            <ul>
                {this.state.habits.map((habit) => (
                    <Habit habit={habit} key={habit.id} />
                ))}
            </ul>
        );
    }
}

export default Habits;
