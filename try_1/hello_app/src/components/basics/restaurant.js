import React,{useState}from 'react'
import "./style.css"

import Menucard from './menucard';
import Menu from './menuapi.js';
import Navbar from './Navbar';


///here new set is used to store,just unique values in const unique.
const unique= [
    
    ...new Set(Menu.map((currele)=>{
    return currele.category;
}))]

//here data stored in unique ,was,in the form of object,to convert apply
//[]square bracket around new set and after square bracket use "...",this
//spread operator.

console.log(unique)

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu)
    const [uniquedata,setuniquedata]=useState(unique)
    const filterele=(category)=>{
         const updated=Menu.filter((currele)=>{
              if(currele.category===category)return currele;

              else if(category==="all") return Menu;
         })
         setMenuData(updated);
    }
    
    //always the hooks is declared in the very first line in any component
    //here menudata is current value,wheras setmenudata,is used to update value of menudata
    //each time we filter MENU,as menudata only contains previously printed values.

    return (
        <>

          
        <Navbar filterele={filterele} unique={uniquedata} />

        <Menucard menuData={menuData}/>
        </>
    )
}



export default Restaurant

