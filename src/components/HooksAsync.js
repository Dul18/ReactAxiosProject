import React, { useState, useEffect } from 'react';

function HooksAsync() {
  const[resourceType,setResourceType] = useState('posts')

  useEffect(()=>{

    console.log('resource changed')

  return()=>{
    console.log('return from resource changed')
  }
  },[resourceType])

  return(
    <>
    <div>

      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>

    </div>

    </>
  )
   
  }
export default HooksAsync
  