import React from "react";
import GrandChild from "./GrandChild";

function Child() {
    console.log("[] [] [🧒🏻] []")

    return (
        <div>
            <p>I'm a Child Component</p>
            <GrandChild />
            <GrandChild />
        </div>
    )
}

export default React.memo(Child)