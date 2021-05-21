import React from "react";

function ListEntry(props) {
    const entryHeader = props.data && (
        <div className="entry-header">
            <div className="general">
                <div className="time-interval">
                    <div>{`${props.data.from} -`}</div>
                    <div>{props.data.to}</div>
                </div>
                <p className="location">{props.data.location}</p>
            </div>
            <div className="specific">
                <h3 className="position">{props.data.position}</h3>
                <h4 className="company-name">{props.data.name}</h4>
            </div>
        </div>
    );

    return (
        <div className="list-entry">
            {entryHeader}
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export default ListEntry;