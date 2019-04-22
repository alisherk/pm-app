import React from 'react'; 
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
  const {auth, profile} = props; 
 const links = auth.uid ? <SignedInLinks profile={profile}/>: <SignedOutLinks/>
  return (
          <nav className="navbar navbar-expand-sm bg-light">
          <div className="container">
          <NavLink to="/"> PM Plan </NavLink>  
          {links}
         </div> 
          </nav>
    );
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth, 
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar); 