import React from "react";

function GrandChild() {
    console.log("[] [] [] [πΆπ»]")
    return (
        <div>
            <p>I'm a Grand Child Component</p>
        </div>
    )
}

export default React.memo(GrandChild)