import React, { Component } from 'react'
import Preview from './components/Preview'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleDetailsChange = this.handleDetailsChange.bind(this);
    this.handleListEntryChange = this.handleListEntryChange.bind(this);
    this.addListEntry = this.addListEntry.bind(this);
    this.removeListEntry = this.removeListEntry.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleItemRemove = this.handleItemRemove.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.state = {
      details: {
        fullName: 'Peter Nowak',
        address: '16 Street',
        phoneNum: '000000000',
        email: 'mymail@mymail.com',
        website: 'www.peternowakexample.com',
        description: 'More about me',
        avatar: ''
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
        {
          from: '',
          to: '',
          location: '',
          position: '',
          name: '',
          tasks: []
        }
      ],
      achievements: [

      ],
      interests: [

      ]
    }
  }

  handleAvatarChange(src) {
    this.setState(state => ({
      details: {
        ...state.details,
        avatar: src
      }
    }));
  }

  addListEntry(e, sectionName) {
    this.setState(state => ({
      [sectionName]: [
        ...state[sectionName],
        {
          from: '',
          to: '',
          location: '',
          position: '',
          name: '',
          tasks: []
        }
      ]
    }));
  }

  removeListEntry(e, sectionName) {
    this.setState(state => ({
      [sectionName]: [
        ...state[sectionName].slice(0, state[sectionName].length-1)
      ]
    }));
  }

  handleItemAdd(e, entryId, sectionName) {

    this.setState(state => {
      return {[sectionName]: [
        ...state[sectionName].slice(0, entryId),
        {
          ...state[sectionName][entryId],
          tasks: [...state[sectionName][entryId].tasks, '']
        },
        ...state[sectionName].slice(entryId+1)
      ]
    }
  });
  }

  handleItemRemove(e, entryId, sectionName) {

    this.setState(state => {
      return {[sectionName]: [
        ...state[sectionName].slice(0, entryId),
        {
          ...state[sectionName][entryId],
          tasks: [...state[sectionName][entryId].tasks.slice(0, 
              state[sectionName][entryId].tasks.length-1)]
        },
        ...state[sectionName].slice(entryId+1)
      ]
    }
    });

  }

  handleItemChange(e, entryId, taskId, sectionName) {
    

    this.setState(state => {
      return {[sectionName]: [
        ...state[sectionName].slice(0, entryId),
        {
          ...state[sectionName][entryId],
          tasks: [
            ...state[sectionName][entryId].tasks.slice(0, taskId),
            e.target.value, 
            ...state[sectionName][entryId].tasks.slice(taskId+1)
          ]
        },
        ...state[sectionName].slice(entryId+1)
      ]
    }
    });

  }

  handleDetailsChange(e) {
    
    this.setState(state => ({
      details: {
        ...state.details,
        [e.target.id]: e.target.value,
      }
    }));
  }

  handleListEntryChange(e, id, sectionName) {
    
    this.setState(state => {
      if(state[sectionName][id])
        return {
          [sectionName]: [
            ...state[sectionName].slice(0, id),
            {
              ...state[sectionName][id],
              [e.target.name]: e.target.value
            },
            ...state[sectionName].slice(id+1)
          ]
        }
      return;
  });
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
    const preview = (        
      <Preview 
        data={this.state}
        editable={false}
      />);

    const editView = (
      <Preview 
        onAvatarChange={this.handleAvatarChange}
        onDetailsChange={this.handleDetailsChange}
        onListEntryChange={this.handleListEntryChange} 
        onAddListEntry={this.addListEntry}
        onRemoveListEntry={this.removeListEntry}
        onItemAdd={this.handleItemAdd}
        onItemRemove={this.handleItemRemove}
        onItemChange={this.handleItemChange}
        data={this.state}
        editable={this.state.editable}
      /> 
    );
    
    return (
      <React.Fragment>
        <div className="navbar">
          <h1>CV-Project</h1>
          {!this.state.editable 
          ?  <button onClick={this.switchMode} class="btn"><i class="fas fa-pen" style={{paddingRight: '.8em'}}></i>Edit</button>
          : <button onClick={this.switchMode} class="btn warning"><i class="fas fa-times" style={{paddingRight: '.8em'}}></i>Preview</button>
          }
          </div>
          {!this.state.editable ? preview : editView}
          
  
      </React.Fragment>
    );
  }
}

export default App;
