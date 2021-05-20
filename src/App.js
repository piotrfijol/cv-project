import PROFILE_PICTURE from './assets/profile-pic.png';

function App() {
  return (
    <div id="container">
      <header>
        <div className="profile-picture">
          <img className="avatar" src={PROFILE_PICTURE} alt=""/>
        </div>
        <div className="contact-info">
          <h1>Andrew Nowak</h1>
          <p><span>Address:</span> 16 Street</p>
          <p><span>Phone number:</span> 123456789</p>
          <p><span>Email address:</span> name@addres.com</p>
          <p><span>Web:</span> www.andrewnowakwebsiteexample.com</p>
        </div>
      </header>
      <div className="sections">
        <div className="profile-section">
          <div className="section-header">
            <i className="far fa-user"></i>
            <h2>Profile</h2>
          </div>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, 
              eleifend id eros sed, varius luctus erat. Curabitur pharetra mi mauris. Lorem ipsum dolor sit 
              amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id eros sed, varius luctus erat. 
              Curabitur pharetra mi mauris. 
            </p>
          </div>
        </div>

        <div className="experience-section">
          <div className="section-header">
            <i className="far fa-calendar-alt"></i>
            <h2>Experience</h2>
          </div>
          <div className="entry-header">
            <div className="general">
              <p className="time-interval">05/2018 - present</p>
              <p className="location">Austin, TX</p>
            </div>
            <div className="specific">
              <h3 className="position">Position</h3>
              <h4 className="company-name">Company name</h4>
            </div>
          </div>
          <div className="content">
            <ul className="tasks">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend 
                id eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id 
                eros sed, varius luctus erat. Curabitur pharetra mi mauris. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
/*<Section icon="far fa-calendar-alt" name="Experience"> 
    <ListEntry position="" location="" from="" to="">
        <li></li>
        <li></li>
        <li></li>
    </ListEntry>
     
    <ListEntry position="" location="" from="" to="">
        <li></li>
        <li></li>
        <li></li>
    </ListEntry>
  </Section>*/


export default App;
