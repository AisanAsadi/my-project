import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home=()=>{


    const[plans, setplans]=useState([]);
    const[main, setmain]=useState([]);

   
    // const usenavigate=useNavigate();

    // useEffect(()=>{
    //     let user_name=sessionStorage.getItem('user_name');
    //     if(user_name===""||user_name===null){
    //         // usenavigate('/login');
    //     }


    // },[])
    // useEffect(() => {
    //     const Request = async () => {
       
    
    //       const res= await fetch('https://vpn-test-django.chbk.run/api/home/')
    //      res.json().then(json=>{
    //       setheader(json.header);
    //       setheader(json.body);
    //      })
        

       
        
         
    //     }
    //     Request()
    
    //   }, []);
   
useEffect(()=>{
  fetch('https://vpn-test-django.chbk.run/api/home/')
  .then(response=>response.json())
  .then(json=>{
    console.log('e',json)
    setplans(json)

  })
  .catch(e=>{
    console.log(e)
  })

},[]);


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


        <div>
    
            <div className="home"> 
            <div className="header">
              <ul>
                <Link to={'/home'}>صفحه اصلی</Link>
                <Link to={'/login'}>پنل کاربری</Link>
                </ul>
           </div>
    
            
                <div>
                  
                    {plans.map(item=>{
                      return(<div className="home-text"> <p>{item.header}</p>
                       <p>{item.body}</p> </div>
                     
                     )
                    })}
            
              
                  
                </div>
                <div className="main">
                  
                    {main.map(index=>{
                      return(<div className="main-table"> 
                         <p key={index.id} className="category">{index.category }  نام </p>
                         <p key={index.id} className="time">مدت زمان {index.period } روز  </p>
                         <p key={index.id} className="cost">قیمت {index.price} تومان</p>
                         <p key={index.id} className="inf"> {index.user_count} کاربره</p>
                         <p key={index.id}>{index.instant_delivery}</p>
                         <p key={index.id}>{index.kill_switch}</p>
                         <p key={index.id}>{index.all_os}</p>
                    

                       
                      
                       </div>
                     
                     )
                    })}
            
              
                  
                </div>
    
           
              </div>  
       
         
           
        </div>
    )




}


export default Home;
