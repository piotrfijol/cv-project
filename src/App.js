import React, { Component } from 'react'
import Preview from './components/Preview'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleDetailsChange = this.handleDetailsChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.state = {
      details: {
        fullName: 'Peter Nowak',
        address: '16 Street',
        phoneNum: '000000000',
        email: 'mymail@mymail.com',
        website: 'www.peternowakexample.com',
        description: 'More about me'
      }, 
      experience: [
        {
          from: '',
          to: '',
          location: '',
          position: '',
          name: '',
          tasks: []
        }
      ],
      education: [

      ],
      achievements: [

      ],
      interests: [

      ]
    }
  }
  handleDetailsChange(e) {
    this.setState(state => ({
      details: {
        ...state.details,
        [e.target.id]: e.target.value,
      }
    }));
  }

  handleExperienceChange(e) {
    const id = e.target.parentNode.parentNode.dataset.id;
    this.setState(state => ({
      experience: [
        ...state.experience.slice(0, id),
        {
          ...state.experience[id],
          [e.target.id]: e.target.value
        },
        ...state.experience.slice(id+1)
      ]
    }));
    console.log(this.state);
  }

  handleChange(e, key) {
    this.setState(state => ({
      [key]: {
        [e.target.id]: e.target.value,
      }
    }));
  }

  handleArrayChange(e, key) {
    this.setState(state => ({
      [key]: {
        [e.target.id]: e.target.value,
      }
    }));
  }

  switchMode() {
    this.setState(state => ({
      editable: !state.editable
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <h1>CV-Project</h1>
          <button onClick={this.switchMode} class="btn"><i class="fas fa-pen" style={{paddingRight: '.8em'}}></i>Edit</button>
        </div>
        <Preview 
          data={this.state}
          editable={false}
        />
        <Preview 
          onDetailsChange={this.handleDetailsChange}
          onExperienceChange={this.handleExperienceChange} 
          data={this.state}
          editable={this.state.editable}
        />
  
      </React.Fragment>
    );
  }
}

export default App;
