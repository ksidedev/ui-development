import React from "react";

function InstanceDetails(props) {
    const instanceDetails = props.data.map((property, index) => {
        return (
            <div className="instance-detail-item" key={index}>
                {property}
            </div>
        )
    });
    return (
        <div className="instance-details-wrapper">
            {instanceDetails}
        </div>
    )
}

export default InstanceDetails;