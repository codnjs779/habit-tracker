import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <>
                <header>
                    ✅ Habits Tracker
                    <span>{this.props.totalCount}</span>
                </header>
            </>
        );
    }
}

export default Nav;
