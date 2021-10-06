import React,{useState} from 'react'

const UseState = () => {

    const initialState=0;
    const[count,setcount]= useState(initialState)

    return (
        <>
        <h1>{count}</h1>
        <button className="increase" onClick={()=>{setcount(count+1)}}>Increament</button>
        <button className="decrease" onClick={()=>{(count>0)?setcount(count-1):setcount(0)}}>Decreament</button>

        </>
    )
}

export default UseState
