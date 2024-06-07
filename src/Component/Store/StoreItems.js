import React,{useState,useEffect} from "react";
import "../Home.css";
import { Link,useNavigate } from "react-router-dom";

const StoreItems=()=>{

  const usenavigate=useNavigate();

  // const [plan,setplan]=useState([])
   const[main, setmain]=useState([]);
  //  const accessToken = sessionStorage.getItem("accessToken");
  //  sessionStorage.setItem("accessToken", response.accessToken);

    useEffect(()=>{
//       const myHeaders = new Headers();
// myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Authorization', `Bearer ${accessToken}`);
// fetch('https://vpn-test-django.chbk.run/api/user_order/', {
// method: 'whatevermethod',
// headers: myHeaders,
// })


  fetch('https://vpn-test-django.chbk.run/api/plans/')
  .then(response=>response.json())
  .then(json=>{
    console.log('e',json)
    setmain(json)

  }).then(
    
  )
  .catch(e=>{
    console.log(e)

  })




},[])
// const addhandler=()=>{
//   console.log('add')
// }

  // console.log(resp)



// useEffect(()=>{
//   let username=localStorage.getItem('username');
//   if(username===""||username===null){
//       usenavigate('/login');
//   }

// let TOKEN=localStorage.getItem('username');



//  fetch("https://vpn-test-django.chbk.run/api/user_order/",{
//   // method:'POST',
//    haeders:{
//       'Authorization':'Token '+TOKEN
// },
// body:JSON.stringify()
// }).then((res)=>{console.log(res)
// return res.json();


//  }).then((resp)=>{
     
//   sessionStorage.setItem("TOKEN",resp.TOKEN)
//   }).catch((err)=>{
//   console.log(err.message)
//  })



// },[]);






return(
    <div className="main" >
                  
    {main.map(index=>{
      return(<div className="main-table"key={index.id}> 
                      <p  className="category">{index.category }  نام </p>
                      <p className="time">مدت زمان {index.period } روز  </p>
                      <p  className="cost">قیمت {index.price} تومان</p>
                       <p  className="inf"> {index.user_count} کاربره</p>
                       <p>{index.instant_delivery}</p>
                         <p >{index.kill_switch}</p>
                          <p >{index.all_os}</p>
         
    
          
              <button className="submit"  id="key">add+</button>
       
     

       
      
       </div>
     
     )
    })}


  
</div> 

)
}
export default StoreItems;





