import { useState } from "react";
import './Register.css';
import {Link,useNavigate} from "react-router-dom";


const Login=()=>{

    const[username,setusername]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');

   const usenavigate=useNavigate("");


   const handellogin=(e)=>{ 

        e.preventDefault();
       
        let regobj={username,email,password};
        console.log(regobj);
        let inputobj={   'username': username,
                         'email':email,
                         'password':password}
        fetch('https://vpn-test-django.chbk.run/api/rest_auth/login/',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(inputobj)
        }).then((res)=>{ 
          return res.json();
          
    }).then((resp)=>{
      
            sessionStorage.setItem("username",username)  
    
                 sessionStorage.setItem("TOKEN",resp.TOKEN)  
                  usenavigate("/home") 
                     console.log(resp)
                   

      
    }).catch((err)=>{
        console.log('err')
    })
   
        


 }



  //  const handleLogin = async () => {
   
  //   try {
  //     // ارسال درخواست لاگین به سرور
  //     const response = await fetch('https://vpn-test-django.chbk.run/api/rest_auth/login/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username,email, password }),
  //     });

  //     if (response.ok) {
  //       // دریافت توکن از پاسخ سرور
  //       const data = await response.json();
  //       const token = data.token;

  //       // ذخیره توکن در localStorage
  //       localStorage.setItem('token', token);

      
        
  //       usenavigate("/home") // مثال: ریدایرکت به داشبورد
  //     } else {
  //       console.error('خطا در لاگین');
  //     }
  //   } catch (error) {
  //     console.error('خطای شبکه:', error);
   
  //   }
  // };


//         const handelloginAPI= async(e)=>{
           

             
           
//         validate();
//  e.preventDefault();
//             let regobj={username,email,password};
//             console.log(regobj);
//             let inputobj={  
//                             'username': username,
//                              'email':email,
//                              'password':password}
                             
//             const response=await fetch('https://vpn-test-django.chbk.run/api/rest_auth/login/' 
//             ,{
//                     method:'POST',
//                     headers:{'Content-Type' :'application/json'},
//                     body:JSON.stringify(inputobj)
//             })
            
//             .then((res)=>{  
//                 console.log('log in')
//               return res.json();
           
//         }).then((resp)=>{
//           console.log(resp)
   
    
//         localStorage.setItem("TOKEN",resp.TOKEN)
       
//             if (Object.keys(resp).length===0){
//                 console.log('pls enter valid')
   
//                 }else{
//                     if(response.ok){
                   
//                         usenavigate("/home")
//                         console.log('valid')
                 
                    
//                     }else{
                     
//                         console.log('invalid ')
                  
//                     }
                   
//                 }
            
        
//         }).catch((err)=>{
//             console.log("err")
//         })
    
    
            
      
//        };     
  
            const validate=()=>{
                let resiult=true;
                if(username===''|| username=== null){
                    resiult=false;
                     console.log("enter user",resiult) }
            
            //      if(password===''|| password=== null){
            //         resiult=false;
            //         console.log("enter pass")
            // }
            if(email===''|| email=== null){
                resiult=false;
                console.log("enter user",resiult)
            
            } 
            
            }
            

    return(

        <div className="row" >
            <div className="offset-lg">
                <form onSubmit={handellogin} className="container">
                    <div className="card">
                        <div className="card-header">
                             <h1>login</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>username<span className="errmsg">*</span></label>
                                <input className="form-control" id="username"  required value={username} onChange={e=>setusername(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label>email<span className="errmsg">*</span></label>
                                <input className="form-control" required id="email" value={email} onChange={e=>setemail(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label>password<span className="errmsg">*</span></label>
                                <input className="form-control" name="password" id="password"  value={password} onChange={e=>setpassword(e.target.value)}></input>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">login</button>
                                <Link className="btn-succes" to={"/register"}>new user</Link>

                            </div>
                        </div>
                    </div>
                </form>
           </div>
        </div>
    )}


export default Login;

    // // const usenavigate=useNavigate();
    // useEffect(()=>{
    //     sessionStorage.clear();

    // },[])


    // const proceedlogin =(e)=>{
    //     e.preventDefault();
    //         // console.log(regobj)
    //            if (validate()){
    //         fetch('https://vpn-test-django.chbk.run/api/rest_auth/login/'+username)
    //     .then((res)=>{
    //        return res.json();
    //     }).then((resp)=>{
    //         // console.log(resp)
    //         if(Object.keys(resp).length===0){
    //             console.log('err')

    //         }else{
    //             if(resp.password===password){
    //                 console.log('success')
    //                 sessionStorage.setItem('user_name',username);
    //                 // usenavigate("/")

    //             }else{
    //                 console.log('err')
    //             }

    //         }
    //     })
    //     .catch((err)=>{
    //         console.log("failed")
    //     })
            

    // }
    // }
    // const validate=()=>{
    //     let result =true;
    //     if (username==="" || username===null){
    //         result=false;
    //         console.log('pls enter user')
            
    //     }
    //     if (password==="" || password===null){
    //         result=false;
    //         console.log('pls enter user')

           
    //     return result;
    // }
    // useEffect(()=>{

// },[])


    // const handellogin=(e)=>{
    //     e.preventDefault();
    //     if(validate()){
    //     // let regobj={username,email,password};
    //     // console.log(regobj);
    //     let inputobj={   'username': username,
    //                      'email':email,
    //                      'password':password}
    //     fetch('https://vpn-test-django.chbk.run/api/rest_auth/login/',{
    //         method:'post',
    //         headers:{'content-type':'application/json'},
    //         body:JSON.stringify(inputobj)
    //     }).then((res)=>{   console.log('succss')
    //       return res.json();
       
    // }).then((resp)=>{
    //     console.log(resp)
    //     if (Object.keys(resp).length===0){
    //         console.log('pls enter valid')
    //     }else{
    //         if(resp.password===password){
    //             console.log('success');

    //             sessionStorage.setItem('username',username);
    //             sessionStorage.setItem('key',resp.key);
    //             usenavigate('/home')

    //         }else{
    //             console.log('enter')
    //         }
    //     }
      
    // }).catch((err)=>{
    //     console.log('err')
    // })
    // }

    //     }