import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect} from 'react-router-dom'; 
import moment from 'moment';


const ProjectDetails = (props) => {
    const { project, auth } = props;
    if(!auth.uid) return <Redirect to='/signin'/> 
    if (project) {
        return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"> {project.title} </h4>
                    <p className="card-text"> {project.content} </p>
                </div>
                <div className="card-footer">
                    <div className="text-muted">
                        <p> {project.authorFirstName} {project.authorLastName} </p>
                        <p> {moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
        <div> 
            <p> Loading projects...</p>
        </div>
        )
    }
        
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);

