import React, { Component } from 'react'; 
import {createProject} from '../../store/actions/projectActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state); 
        this.props.history.push('/');
    }

    render() {
        const {auth} = this.props; 
        if(!auth.uid) return <Redirect to='/signin'/> 
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h5 className="text-primary text-center"> Create Project </h5>
                            <label htmlFor="title"> Project Title </label>
                            <input type="text" id="title" onChange={this.handleChange} className="form-control" />
                            <label htmlFor="content"> Project Content </label>
                            <textarea id="content" onChange={this.handleChange} className="form-control" /> 
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {  
    return {
        createProject:(project) => dispatch(createProject(project))
    }
}

const mapStateToProps = (state) => {
   return {
       auth: state.firebase.auth
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

