import Section from './components/Section.js';
import ListEntry from './components/ListEntry.js';
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
          <p><span className="label">Address:</span> 16 Street</p>
          <p><span className="label">Phone number:</span> 123456789</p>
          <p><span className="label">Email address:</span> name@addres.com</p>
          <p><span className="label">Web:</span> www.andrewnowakwebsiteexample.com</p>
        </div>
      </header>
      <div className="sections">
        <Section name="Profile" icon="far fa-user">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam erat, 
              eleifend id eros sed, varius luctus erat. Curabitur pharetra mi mauris. Lorem ipsum dolor sit 
              amet, consectetur adipiscing elit. Maecenas diam erat, eleifend id eros sed, varius luctus erat. 
              Curabitur pharetra mi mauris. 
          </p>
        </Section>
        <Section name="Experience" icon="far fa-calendar-alt">
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

export default App;
