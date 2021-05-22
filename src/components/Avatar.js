import PROFILE_PICTURE from '../assets/profile-pic.png';

function Avatar(props) {

    const avatarUrl = props.url || PROFILE_PICTURE;

    const handleChange = (e) => {
        const file = e.target.files[0];
        if(!file) return;


        const reader = new FileReader();
        reader.addEventListener('load', (e) => {
            if(e.target.result.startsWith("data:image/"))
                props.onAvatarChange(e.target.result);
        });
        reader.readAsDataURL(file);
    }

    return (
        <div className="profile-picture">
            {props.editable ?  
            <label className="avatar-target" htmlFor="avatar-picture">
                <img id="avatar" className="avatar" src={avatarUrl} alt=""/>
            </label> 
            : <img id="avatar" className="avatar" src={avatarUrl} alt=""/>}
           
            <input onChange={handleChange} accept="image/png, image/jpeg" id="avatar-picture" type="file" />
        </div>
    );
}

export default Avatar;