import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    // data를 가지고 있는 곳에서 데이터를 수정할 수 있는 함수를 만들어주는 구조가 가장 바람직 함
    // state move

    handleIncrease = (habit) => {
        // 리액트에서state를 직접 수정하는 것은 옳은 방법이 아니다. 아래와 같이 복사해서 수정하는 방법이 좋은 방법!

        const habits = [...this.props.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits: habits });
        // 키와 값이 동일 할 때 생략가능
    };

    handleDecrease = (habit) => {
        const habits = [...this.props.state.habits];
        const index = habits.indexOf(habit);

        if (habit.count > 0) {
            habits[index].count--;
            this.setState({ habits });
        }
        return habit.count;
    };

    handleDelete = (habit) => {
        // habit으로 넘겨받은 id와 동일하지 않는 객체들로 새 배열을 만들기
        const habits = this.props.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
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
