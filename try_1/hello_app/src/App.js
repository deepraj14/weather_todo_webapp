import React, { useState,useEffect } from 'react'
import Restaurant from './components/basics/restaurant';
import Effect from './components/basics/effect';
import UseState from './components/basics/UseState';
import Todo from './components/todo_react/todo';
import Temp from './components/weather/temp';
const App = () => {
  return (
    <>
       <Temp />
    </>
  )
}

export default App








































/*import React from 'react'

const App = () => {
  return (
    
    
    <>
    <M/>
    <div  className="myclassname">we can use div inside syntactic sugar format,but not outside</div>
    <div >This is the syntactic sugar format</div>
    <img  alt="" src=""></img>
    
    
    </>
    
    //in one function,syntactic sugar can only be used once and evrything will be write inside it only
    //use className instead of class,close all tags.
  )

}


//hence now we are making a new component and we are going to nest it in app,
//here component is much like functions,we can all them anywhere <component_name/> like this

const M = () => {
  return <h1>hello world</h1>;

}

export default App
*/
