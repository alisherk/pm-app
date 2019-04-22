import React from 'react'; 
import {NavLink} from 'react-router-dom';
import Logout from './Logout';

const SignedInLinks = (props) => { 
  return (
         <ul> 
            <li> <NavLink to='/create'>New Project </NavLink> </li>
            <li> <NavLink to='/'> {props.profile.initials} </NavLink> </li>
            <li> <Logout/> </li>
         </ul>    
    );
}

export default SignedInLinks; 