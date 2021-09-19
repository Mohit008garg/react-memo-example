import React, {useState} from "react";
import MyChildComponent from "./MyChildComponent";

function MyParentComponent() {
    const[parentStateTracker, setParentState] = useState(0);
    const changeStateOfParent = () => setParentState(parentStateTracker + 1);
    
    return (
        <div>
            <h3>{parentStateTracker}</h3>
            <button onClick={changeStateOfParent}>Change State Of Parent One</button> 
            <br/>
            <MyChildComponent />
        </div>
    );
}

export default MyParentComponent;