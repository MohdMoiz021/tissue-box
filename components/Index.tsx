'use client'
import { log } from 'console'
import React, {useState} from 'react'

function countInitial(){
    console.log('run function');
    return 4
}

export default function Index (){

   const [count,setCount]= useState(countInitial())
   function decrementCount(){
    setCount(prevCount =>prevCount- 1)
   }


   function incrementCount(){
    setCount(upCount=>upCount + 1)
   }
    return(
        <>
        <div className='border border-black rounded-xl w-full mx-auto justify-center'>
            <div className='mx-auto w-64'>
        <button className="text-5xl" onClick={decrementCount}>-</button>
                <span className="text-3xl border rounded-full">{count}</span>
                <button className="text-5xl" onClick={incrementCount}>+</button>
                </div>
                </div>
        </> 
    )
}