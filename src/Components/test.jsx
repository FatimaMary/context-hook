import React from "react";
import { MyContext } from "./context";

export default (props) => {
    return(
        <MyContext.Consumer>
        {(context) => {
            return(
                <div>
                <h1>Counting: {context.count}</h1>
                <button onClick={context.increment}>Increment</button>
                <button onClick={context.decrement}>Decrement</button>
                </div>
            )
        }
        }
        </MyContext.Consumer>
    )
}