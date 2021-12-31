import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    // data를 가지고 있는 곳에서 데이터를 수정할 수 있는 함수를 만들어주는 구조가 가장 바람직 함
    // state move

    handleIncrease = (habit) => {
        this.props.handleIncrease(habit);
    };

    handleDecrease = (habit) => {
        this.props.handleDecrease(habit);
    };

    handleDelete = (habit) => {
        this.props.handleDelete(habit);
    };

    render() {
        return (
            <ul>
                {this.props.state.habits.map((habit) => (
                    <Habit habit={habit} key={habit.id} onIncrease={this.handleIncrease} onDecrease={this.handleDecrease} onDelete={this.handleDelete} />
                ))}
            </ul>
        );
    }
}

export default Habits;
