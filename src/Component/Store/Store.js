import React,{useState} from "react"
import Wrapper from "../../hoc/Wrapper"
import { Link } from "react-router-dom"
import "../Home.css"


const Store=(props)=>{


  
      
    return (
        <div>
            
            <div className="home"> 
            <div className="header">
              <ul>
                <Link to={'/home'}>صفحه اصلی</Link>
                <Link to={'/login'}>پنل کاربری</Link>
                <Link to={'/store'}> سبد</Link>
                </ul>
          
           </div>
    
            
             </div>
        <Wrapper>
          <h3>Order</h3>
          
          <p > Total Price: </p>
          <p>Continue?</p>
 
        </Wrapper>
    </div>  )
    }

export default Store