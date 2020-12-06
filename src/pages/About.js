import React,{useContext} from 'react';
import {useLocation,useHistory} from 'react-router';
import {UserContext} from '../UserContext'

function About(){
    const {user,setUser}= useContext(UserContext);
    const location = useLocation ();
    const history = useHistory ();
    console.log(history);

    function goBackHandle(){

        history.goBack();
    }

    return (
    <>  
    <div>About</div> 
    <pre>{JSON.stringify(user,null,2)}</pre>
    <div>Location={location.pathname}</div> 
    <div>From={location.state.from}</div> 

    <button onClick={goBackHandle}>Go Back</button>
    </>
    
    
    )
}

export default About