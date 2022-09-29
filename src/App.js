import React from "react";
import GrandParent from './components/GrandParent'



//Uses React.memo() - which is a higher order component. It prevents rerndering
//all child components down a single branch of the App.

/**
 * Also present is the areEqual function - returns true if passing #
 * nextProps to render would return the same result as passing prevProps 
 * to render, otherwise return false.
 * 
 * Can be used to as a second paramenter to the React.memo() function. If so
 * it will use whatever condition(s) you've written in the areEqual function to 
 * determine whether or not to rerender the component 
 * 
 */


function App() {

    const [count, setCount] = React.useState(0);

    console.log("[GP] [P] [C] [GC] APP just rendered")

    function increment(e){
        e.preventDefault();
        setCount(s=>s = s + 1);
    }

    return (
        <>
            <button onClick={increment}>+1</button>
            <h3>{count}</h3>
            <p>I'm the App Component</p>
            <GrandParent count={count}/>
            <GrandParent />
        </>
    )
}

export default App