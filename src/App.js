import React from 'react'
import PreviewMode from './components/PreviewMode'
import EditMode from './components/EditMode';

function App() {
  return (
    <React.Fragment>
    <div className="navbar">
      <h1>CV-Project</h1>
      <button class="btn"><i class="fas fa-pen" style={{paddingRight: '.8em'}}></i>Edit</button>
    </div>
      <PreviewMode />
      <EditMode />

    </React.Fragment>
  );
}

export default App;
