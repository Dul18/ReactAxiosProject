import React, { useState, useEffect } from 'react';
import { useHttpInterceptor } from '../Utility/Http/Intercepter';

function UseMe() {
  const [user, setUser] = useState(null);
  const [requestConfig,SetRequestConfig]=useState(null);

  let {result,error}=useHttpInterceptor(requestConfig);

  useEffect(async () =>{
    const config={
        'method':'get',
        'url':'/?results=10'
    };
    SetRequestConfig(config);
},[]);


useEffect(() =>{
  if(result){
      console.log(result);
      setUser(result.data.results[0])

  
  }
  else{
    console.log(error);
  }
  
  
},[result]);

  return (
    <div align="center">
      {
        user &&
        <div align="center">
          
          <h2>Name = {user.name.title + '  ' + user.name.first +'  ' + user.name.last}</h2>
          <h2>City= {user.location.city}</h2>
          <h2>gender = {user.gender}</h2>
          <h2>Age= {user.dob.age}</h2>
          <h2>Email={user.email}</h2>
          <img
            src={user.picture.medium} alt="ddd" />

         
        </div>
      }
      
      
    </div>
  )


}

export default UseMe;