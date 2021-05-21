import Section from './Section';

function Profile({editable, description, onProfileChange}) {
    return (
    <Section name="Profile" icon="fas fa-user">
        {editable ? <textarea onChange={onProfileChange} id="description"/> : <p>{description}</p>}
    </Section>
    );
}

export default Profile;