import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 
import {signIn} from '../../store/actions/authAction';
import {Redirect} from 'react-router-dom';

class Signin extends Component {
    state = {
        email: '', 
        password: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.signIn(this.state); 
    }

    render() {
        const {authError, auth} = this.props; 
        if(auth.uid) return <Redirect to='/'/> 
        return (
            <div className="container col-md-6">
             <div className="row justify-content-center">  
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="text-primary text-center"> Sign in </h5>
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" onChange={this.handleChange} />
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" onChange={this.handleChange} />
                        <button className="btn btn-primary">Login</button>
                        <div className="text-danger"> 
                         {authError ? <p> {authError}</p> : null}
                        </div>
                    </form>
                </div>  
                </div>     
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin); 
