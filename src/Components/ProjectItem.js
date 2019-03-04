import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" style={xStyle} onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}

const xStyle = {
    textDecoration: 'none',
    color: '#000',
    fontSize: '20px',
    border: '1px solid black',
    borderRadius: '50%',
    paddingRight: '5px',
}

ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

export default ProjectItem;




