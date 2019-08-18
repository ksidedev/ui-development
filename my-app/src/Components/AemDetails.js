import React, { Component } from "react";
import data from "../Resources/Data";
import Button from "./Button";
import InstanceDetails from "./InstanceDetails"

class AemDetails extends Component {
    constructor() {
        super();
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(instanceName) {
        this.setState({
            [instanceName]: true
        })
    }

    render() {
        const buttons = data.map((instance) => {
            return (
                <div className="input-container" key={instance.id}>
                    <Button
                        instanceName={instance.name}
                        onClick={() => this.handleClick(instance.name)}
                    />
                    {this.state[instance.name] ? <InstanceDetails name={instance.name} data={instance.canDo} /> : null}
                </div>
            )
        })

        return (
            <div className="main-content">
                {buttons}
            </div>
        )
    }

}
export default AemDetails;