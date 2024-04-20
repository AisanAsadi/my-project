import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import './Home.css'

import StoreItems from "./Store/StoreItems";

const Home=()=>{

    const[plans, setplans]=useState([]);





 
    const usenavigate=useNavigate();

    useEffect(()=>{
        let username=sessionStorage.getItem('username');
        if(username===""||username===null){
            usenavigate('/login');
        }


    },[]);
    useEffect(()=>{
let TOKEN="3fa1dd786275b7087fcf10de9bac101fcacdd85c"
fetch("https://vpn-test-django.chbk.run/api/tutorials/",{
  headers:{
   
    'Authorization':'Token '+TOKEN
  }
}).then((res)=>{
  return res.json();

}).then((resp)=>{
  console.log(resp)
}).catch((err)=>{
  console.log(err.message)
})
// let TOKEN="078b9d78f30ec79065bd29f3d76b6265ffa46b20"
// useEffect(() => {
//   const Requestt = async () => {

//     const res= await fetch('https://vpn-test-django.chbk.run/api/tutorials/',{
//       method:'GET',
//       headers:{'Authorization': `Token  `+ TOKEN} ,
//     })
//     const resData = await res.json()
//     console.log(resData)
//   }
//   Requestt()

// }, []);



 

  fetch('https://vpn-test-django.chbk.run/api/home/')
  .then(response=>response.json())
  .then(json=>{
    console.log('e',json)
    setplans(json)

  })
  .catch(e=>{
    console.log(e)
  })

// },[]);


// useEffect(()=>{
  // fetch('https://vpn-test-django.chbk.run/api/plans/')
  // .then(response=>response.json())
  // .then(json=>{
  //   console.log('e',json)
  //   setmain(json)

  // })
  // .catch(e=>{
  //   console.log(e)

  // })

},[])
  
    return(


        <div>
    
            <div className="home"> 
            <div className="header">
              <ul>
                <Link to={'/home'}>صفحه اصلی</Link>
                <Link to={'/login'}>پنل کاربری</Link>
                <Link to={'/store'}> سبد</Link>
                </ul>
          
           </div>
    
            
                <div>
                  
                    {plans.map(item=>{
                      return(<div className="home-text" > <p key={item.id}>{item.header}</p>
                       <p key={item.id}>{item.body}</p> </div>
                     
                     )
                    })}
            
              
                  
                </div>
                <StoreItems/>
                {/* <div className="main">
                  
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
                          <button className="btn">add</button>
                         </td>
                    

                       
                      
                       </div>
                     
                     )
                    })}
            
              
                  
                </div> */}
    
           
              </div>  

       
         
         
        </div>
    )




}


export default Home;
