import React, { memo } from "react";

const Nav = memo(({ totalCount }) => {
    return (
        <>
            <header>
                ✅ Habits Tracker
                <span>{totalCount}</span>
            </header>
        </>
    );
});

export default Nav;
