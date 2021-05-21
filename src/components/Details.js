import React from "react";

function Details({details, editable, onDetailsChange}) {

    const preview = details && (
        <div className="contact-info">
            <h2 className="underline">{details.fullName}</h2>
            <p><span className="label">Address:</span>{details.address}</p>
            <p><span className="label">Phone number:</span>{details.phoneNum}</p>
            <p><span className="label">Email:</span>{details.email}</p>
            <p><span className="label">Website:</span>{details.website}</p>
        </div>
    );

    const editView = details && (
        <div className="contact-info">
            <div className="col">
                <label style={{fontWeight: '600', marginBottom: '.2em'}} htmlFor="full-name" >Full name: </label><input onChange={onDetailsChange} value={details.fullName} placeholder="Peter Nowak" style={{marginBottom: '.5em', padding: ' .1em .4em', fontSize: '24px'}} id="fullName" type="text" />
            </div>
            <form>
                <div className="row">
                    <label htmlFor="address">Address: </label><input onChange={onDetailsChange} value={details.address} placeholder="16 Street" type="text" id="address"/>
                </div>
                <div className="row">
                    <label htmlFor="phone-number">Phone number:</label><input onChange={onDetailsChange} value={details.phoneNum} placeholder="+1 (236) 237-6237" type="tel" id="phoneNum"/>
                </div>
                <div className="row">
                    <label htmlFor="email">Email: </label><input onChange={onDetailsChange} value={details.email} placeholder="name@addres.com" type="email" id="email"/>
                </div>
                <div className="row">
                    <label htmlFor="website">Website: </label> <input onChange={onDetailsChange} value={details.website} placeholder="www.andrewexample.com" type="text" id="website"/>
                </div>
            </form>
        </div>
    );

    return (
        <React.Fragment>
            {editable ? editView : preview}
        </React.Fragment>
    );
}

export default Details;