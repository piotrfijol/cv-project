import PROFILE_PICTURE from '../assets/profile-pic.png';

function Avatar() {
    return (
        <div className="profile-picture">
            <img className="avatar" src={PROFILE_PICTURE} alt=""/>
        </div>
    );
}

export default Avatar;