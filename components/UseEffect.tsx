'use client' 
import React, {useEffect,useState} from 'react'



export default function UseEffect (){
   const [resourceType,setResourceType]=useState('posts')
   useEffect(()=>{
    console.log('render');
    
   },[resourceType])
    return (
        <>
        <div>
            <button onClick={()=>setResourceType('posts')}>posts</button>
            <button onClick={()=>setResourceType('users')}>users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        </>
    )
}