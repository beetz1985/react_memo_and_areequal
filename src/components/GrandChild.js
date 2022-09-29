import React from "react";

function GrandChild() {
    console.log("[] [] [] [👶🏻]")
    return (
        <div>
            <p>I'm a Grand Child Component</p>
        </div>
    )
}

export default React.memo(GrandChild)