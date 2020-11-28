import React from 'react';
import {useLocation,useHistory} from 'react-router';

function About(){
    const location = useLocation ();
    const history = useHistory ();
    console.log(history);

    function goBackHandle(){

        history.goBack();
    }

    return (
    <>  
    <div>About</div> 
    <div>Location={location.pathname}</div> 
    <div>From={location.state.from}</div> 

    <button onClick={goBackHandle}>Go Back</button>
    </>
    
    
    )
}

export default About