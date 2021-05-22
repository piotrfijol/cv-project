import React from 'react';
import Details from './Details';
import Avatar from './Avatar';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Achievements from './Achievements';
import Interests from './Interests';

function Preview(props) {

    return (
        <div className="container">
                <header>
                    <Avatar 
                        onAvatarChange={props.onAvatarChange} 
                        url={props.data.details.avatar} 
                        editable={props.editable}
                    />
                    <Details 
                        onDetailsChange={props.onDetailsChange} 
                        details={props.data.details} 
                        editable={props.editable}
                    />
                </header>
            <div className="sections">
                <Profile 
                    onProfileChange={props.onDetailsChange} 
                    description={props.data.details.description} 
                    editable={props.editable}
                />
                <Experience 
                    onAddExperience={props.onAddListEntry} 
                    onExperienceChange={props.onListEntryChange} 
                    onRemoveExperience={props.onRemoveListEntry}
                    onTaskAdd={props.onItemAdd}
                    onTaskRemove={props.onItemRemove}
                    onTaskChange={props.onItemChange}
                    experience={props.data.experience} 
                    editable={props.editable}
                />
                <Education editable={props.editable}/>
                <Achievements editable={props.editable}/>
                <Interests editable={props.editable}/>
            </div>
        </div>
    );
}

export default Preview;