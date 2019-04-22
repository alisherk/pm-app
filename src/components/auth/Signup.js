import React, { Component } from 'react'; 
import {Redirect} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authAction';

class Signup extends Component {
   
    state = {
        email: '', 
        password: '', 
        firstName: '', 
        lastName: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.signUp(this.state);
    }

    render() {
        const {auth} = this.props; 
        if(auth.uid) return <Redirect to='/'/> 
        return (
            <div className="container">
             <div className="row justify-content-center">  
                <div className="card col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="text-primary text-center"> Sign up </h5>
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" onChange={this.handleChange} className="form-control"/>
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" className="form-control" onChange={this.handleChange} />
                        <label htmlFor="firstName"> First Name </label>
                        <input type="text" id="firstName" className="form-control" onChange={this.handleChange} />
                        <label htmlFor="lastName"> Last Name </label>
                        <input type="text" id="lastName" className="form-control" onChange={this.handleChange} />
                        <button className="btn btn-primary">Sign up</button>
                    </form>
                </div>  
                </div>     
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         signUp: (newUser) => dispatch(signUp(newUser))
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 
