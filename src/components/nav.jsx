import React, { PureComponent } from "react";

class Nav extends PureComponent {
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
