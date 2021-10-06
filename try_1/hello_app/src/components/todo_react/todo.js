import React ,{useState,useEffect} from 'react'
import './style.css'


const intialitem=()=>{

   const a= localStorage.getItem("mytodolist");
   if(a)
   {
       return JSON.parse(a);
   }
   else{
       return [];
   }

}


const Todo = () => {
    const [data,setData]=useState("");
    const[item,setItem]=useState(intialitem());
    const[toggle,settoggle]=useState(true)
    
    const additem=(initialdata)=>
    {
        if(!initialdata)
        {
            alert("provide us with some data");
        }
        else{
           
            const dataobj={
                id: new Date().getTime().toString(),
                name:data
            }

            setData({name:""});
            setItem([...item,dataobj]);
            
        }
    }

    const deleteitem=(currele)=>{
       const updated=item.filter((x)=>{
           return x.id!==currele;
       })
       setItem(updated)
    }

    useEffect(() => {
        
        localStorage.setItem("mytodolist",JSON.stringify(item))

    }, [item])
    //hence this is how we can use local storage,with the help of use effect hook
    //here we are setting the item in localstroage,we have to only pas string objects in
    //localstrorage,the key is the first param,thta is used to get the item

    const edititem=(index)=>{
        settoggle(false);
        const temp=item.filter((x)=>{return x.id===index});
        //setData(temp)
        temp.name=data;
        //setData(temp.name);

        //deleteitem(index);
    }
  

    return (
        <>
          <div className="main-div">

           <div className="child-div">
               <figure>
                   <img src="./images/todo.svg" alt="todologo" />
                   <figcaption>Add Your List Here 😉!!!</figcaption>
               </figure>
               <div className="addItems">

                  <input type="text"
                   placeholder="add your items" 
                   className="form-control"
                   value={data.name}
                   onChange={(event)=>{
                       
                       setData(event.target.value)}}
                       
                   />
                   {(toggle===true)?<i className="fa fa-plus add-btn" onClick={()=>{additem(data)}}></i>:<i className="fa-solid fa-atom-simple add-btn" ></i>}
                   
{/* here ... spread opertor includes all the data present in all previous states of our array item 
and then further the chanaged value from input box,that is data is also added to those values*/}
               </div>
               <div className="showItems">
                  
                       {item.map((currele)=>{
                               return(
                                   <>
                                   <div className="eachItem" key={currele.id}>
                                    <h3>{currele.name}</h3>
                                <div className="todo-btn">
                       <i className="far fa-edit add-btn" onClick={()=>{edititem(currele.id)}}></i>
                       <i className="far fa-trash-alt add-btn" onClick={()=>{deleteitem(currele.id)}}></i>
                       </div>
                       </div>
                       </>
                       )
                       
                       })}
                       
                   
               </div>
               <div className="showItems">

                   <button className="btn effect04" data-sm-link-text="REMOVE ALL" onClick={()=>{setItem([])}}>
                       <span>CHECK LIST</span>
                       </button>
               </div>
           </div>

          </div>




        </>
    )
}

export default Todo