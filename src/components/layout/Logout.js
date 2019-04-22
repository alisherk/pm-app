import React from 'react'
import {connect} from 'react-redux'; 
import {signOut} from '../../store/actions/authAction';

function Logout(props) {
  return (
    <div>

        <button className='link-button' onClick={props.signOut}> Log out </button>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
       signOut:() => dispatch(signOut())
    }
 }
 
 export default connect(null, mapDispatchToProps)(Logout); 
