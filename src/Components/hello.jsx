import React from "react";
import Test from "./test";


export default (props) => {
    return (
        <React.Fragment>
            <h1>Hello</h1>
            <Test count={props.count} />
        </React.Fragment>
    )
};