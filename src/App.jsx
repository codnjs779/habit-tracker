import "./App.css";
import Habits from "./components/habits";

import React, { Component } from "react";

class App extends Component {
    state = {
        habits: [
            { id: 0, name: "Running", count: 0 },
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Coding", count: 0 },
        ],
    };
    onCounter = () => {
        console.log("hello");
    };
    render() {
        return (
            <>
                <header>
                    ✅ Habits Tracker
                    <span>0</span>
                </header>

                <main>
                    <form>
                        <input type="text" placeholder="Habit" />
                        <button type="submit">Add</button>
                    </form>
                    <Habits state={this.state} />
                </main>

                <button className="resetBtn">Reset All</button>
            </>
        );
    }
}

export default App;
