import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import './Home.css'


import StoreItems from "./Store/StoreItems";

const Home=()=>{

    const[plans, setplans]=useState([]);

    const usenavigate=useNavigate();
   

    //vorod be home
    // useEffect(()=>{
    //     let username=localStorage.getItem('username');
    //     if(username===""||username===null){
    //         usenavigate('/login');
    //     }


    // },[]);


// khandane token ba login
//     useEffect(()=>{
//          let TOKEN=localStorage.getItem('username');
//         fetch("https://vpn-test-django.chbk.run/api/user_order/",{
//           headers:{
   
//              'Authorization':'Token '+TOKEN
//       }
//        }).then((res)=>{
//        return res.json();

//         }).then((resp)=>{
//          console.log(resp)
//          }).catch((err)=>{
//          console.log(err.message)
//         })


// },[]);

//get kardan headers
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

  
    return(


        <div className="all">
    
            <div className="home"> 
            <div className="header" >
              <div className="nav">
             
                <Link to={'/home'}>صفحه اصلی</Link>
                <Link to={'/login'}>پنل کاربری</Link>
                <Link to={'/store'}> سبد</Link>
              </div>
           
           </div>
                <div>
              
                    {plans.map(item=>{
                      return(
                            
                           <div className="home-text"  key={item} > 
                            <React.Fragment>
                            <p className="HEADER_TEXT">{item.header}</p>
                            <p className="BODY_TEXT" > {item.body}</p>
                       
                        </React.Fragment>           </div>
              )
                    })}
     
                </div>
                <StoreItems/>
              </div>  
        </div>
    )




}


export default Home;



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
  