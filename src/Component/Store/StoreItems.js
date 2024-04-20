import React,{useState,useEffect} from "react";
import "../Home.css";

const StoreItems=()=>{


  
    const[main, setmain]=useState([]);

    useEffect(()=>{
  fetch('https://vpn-test-django.chbk.run/api/plans/')
  .then(response=>response.json())
  .then(json=>{
    console.log('e',json)
    setmain(json)

  })
  .catch(e=>{
    console.log(e)

  })

},[])

return(
    <div className="main">
                  
    {main.map(index=>{
      return(<div className="main-table"key={index.id}> 
         <p  className="category">{index.category }  نام </p>
         <p className="time">مدت زمان {index.period } روز  </p>
         <p  className="cost">قیمت {index.price} تومان</p>
         <p  className="inf"> {index.user_count} کاربره</p>
         <p>{index.instant_delivery}</p>
         <p >{index.kill_switch}</p>
         <p >{index.all_os}</p>
         
         <td> 
          
              <button className="btn" >add+</button>
       
         </td>
    

       
      
       </div>
     
     )
    })}


  
</div> 

)
}
export default StoreItems;





