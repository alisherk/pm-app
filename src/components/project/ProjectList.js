import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="container">
         {projects && projects.map(project => {
             return (
                 <Link key={project.id} to={'/project/' + project.id}> <ProjectSummary projects={project} key={project.id}/> </Link>   
             );
         })}  

        </div>
    );
}

export default ProjectList;