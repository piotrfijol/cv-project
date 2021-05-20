import Section from './Section';
import ListEntry from './ListEntry';
import PROFILE_PICTURE from '../assets/profile-pic.png';
import React from 'react';

function EditMode() {
    return (
    <div className="container">
            <h2 className="underline">Details</h2>
                <form>
                    <label>First name: <input type="text" /></label>
                    <label>Last name: <input type="text" /></label>
                    <label>Address: <input type="text" /></label>
                    <label>Phone number: <input type="text" /></label>
                    <label>Email: <input type="text" /></label>
                    <label>Website: <input type="text" /></label>
                </form>
            <h2 className="underline">Profile</h2>
            <h2 className="underline">Experience</h2>
            <h2 className="underline">Education</h2>
            <h2 className="underline">Achievements</h2>
            <h2 className="underline">Interests</h2>
    </div>
    );
}

export default EditMode;