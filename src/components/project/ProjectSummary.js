import React from 'react';
import moment from 'moment';

const ProjectSummary = ({projects}) => {

    return (
        <div className="card">
            <div className="card-body">
                <h4>{projects.title} </h4> 
                <p> {projects.content} </p>
                <p> {projects.authorFirstName} {projects.authorLastName}</p>
                <p className="text-muted"> {moment(projects.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    );
}

export default ProjectSummary;