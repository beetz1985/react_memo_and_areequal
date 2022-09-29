import React from "react";
import Parent from "./Parent";

function GrandParent(props) {
    console.log("[👴🏼] [] [] []")

    return (
        <div>
            <p>I'm a Grand Parent Component</p>
            <Parent />
            <Parent />
        </div>
    )
}

export default React.memo(GrandParent)