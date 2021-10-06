import React from 'react'
import './style.css'

const Navbar = ({filterele,unique}) => {
    return (
        <>
         
         <nav className="navbar">
              
              <div className="btn-group">
                   

                   {unique.map((currele)=>{
                       return (

                       <button className="btn-group__item" onClick={()=>{filterele(currele)}}   >
                           {currele}
                       </button>


                       )
                   })}

<button className="btn-group__item" onClick={()=>{filterele("all")}}   >
                           All
                       </button>
                   
                 

              </div>

          </nav>


        </>
    )
}

export default Navbar

