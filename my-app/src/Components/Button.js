import React from "react";

function Button(props) {
    return (
        <button className="button-tile" onClick={props.onClick}>{props.instanceName}</button>
    )
}


export default Button;