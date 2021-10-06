import React,{useReducer} from 'react'

const reducer=(state,action)=>{
    if(action.type==="INC")
    {
         state=state+1;
    }
    if(action.type==="DEC")
    {
        state=state-1;
    }

    return state;

}

const UseReduce = () => {
       
    const initialState=0;
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        
     
        <>
         
         <h1>{state}</h1>

         <button className="increase" onClick={()=>{dispatch({type:"INC"})}}>Increament</button>
         <button className="decrease" onClick={()=>{dispatch({type:"DEC"})}}>Decreament</button>

        </>
    );
}

export default UseReduce
