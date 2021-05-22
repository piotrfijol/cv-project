import Section from './Section';

function Profile({editable, description, onProfileChange}) {
    return (
    <Section name="Profile" icon="fas fa-user">
        {editable ? <textarea style={{height: '150px'}} value={description} onChange={onProfileChange} id="description"/> : <p>{description}</p>}
    </Section>
    );
}

export default Profile;