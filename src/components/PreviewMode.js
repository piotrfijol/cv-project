import Section from './Section';
import ListEntry from './ListEntry';
import PROFILE_PICTURE from '../assets/profile-pic.png';
import React from 'react';

function PreviewMode() {
    return (
        <div className="container">
            <header>
                <div className="profile-picture">
                <img className="avatar" src={PROFILE_PICTURE} alt=""/>
                </div>
                <div className="contact-info">
                <h2 className="underline">Andrew Nowak</h2>
                <p><span className="label">Address:</span> 16 Street</p>
                <p><span className="label">Phone number:</span> 123456789</p>
                <p><span className="label">Email:</span> name@addres.com</p>
                <p><span className="label">Website:</span> www.andrewnowakwebsiteexample.com</p>
                </div>
            </header>
        <div className="sections">
            <Section name="Profile" icon="fas fa-user">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, 
                eleifend id eros sed, varius luctus erat. Curabitur pharetra mi mauris. Lorem ipsum dolor sit 
                amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id eros sed, varius luctus erat. 
                Curabitur pharetra mi mauris. 
            </p>
            </Section>
            <Section name="Experience" icon="fas fa-calendar-alt">
            <ListEntry data={{
                from: '08/2013',
                to: '05/2016',
                location: 'Austin, TX',
                position: 'Position',
                name: 'Company name'
            }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend 
                    id eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id 
                    eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                </li>
            </ListEntry>

            <ListEntry data={{
                from: '07/2016',
                to: 'present',
                location: 'New York',
                position: 'Position',
                name: 'Company name'
            }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend 
                    id eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id 
                    eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                </li>
            </ListEntry>
            </Section>
            <Section name="Education" icon="fas fa-graduation-cap">
            <ListEntry data={{
                from: '09/2008',
                to: '06/2013',
                location: 'Cambridge, MA',
                position: 'Computer Science',
                name: 'Harvard University'
                }}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend 
                    id eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                    </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id 
                    eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                    </li>
                </ListEntry>
            </Section>
            <Section name="Achievements" icon="fas fa-trophy">
            <ListEntry>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend 
                    id eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                    </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id 
                    eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
                    </li>
                </ListEntry>
            </Section>
            <Section name="Interests" icon="fas fa-star">
                <p>x, y, z</p>
            </Section>
        </div>
    </div>
    );
}

export default PreviewMode;