import React ,{useState,useEffect} from 'react'

const Effect = () => {

 
    const[count,setcount]=useState(0);
    
    useEffect(() => {
       document.title=(`chats(${count})`)
    })


    return (
        <>
          <h1>{count}</h1>
          <button className="increase" onClick={()=>{setcount(count+1)}}>Increament</button>
          <button className="decrease" onClick={()=>{(count>1)?setcount(count-1):setcount(count)}}>Decreamnet</button>

        </>
    )
}

export default Effect
