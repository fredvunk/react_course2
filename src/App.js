import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
          }
  }

  componentWillMount(){
    this.setState({projects: [
        {
          title: 'Business website',
          category: 'Web Design'
        },
        {
          title: 'Social app',
          category: 'Mobile Development'
        },
        {
          title: 'Shopping Card',
          category: 'Web development'
        }
      ]})
  }
handleAddProject(project){
    console.log(project);
}

  render() {
    return (
      <div className="App">

        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
