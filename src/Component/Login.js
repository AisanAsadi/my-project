import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'



const Login=()=>{
    const[username,setusername]=useState('');

    const[email,setemail]=useState('');
    
    const[password,setpassword]=useState('');

    return(

        <div className="row">
            <div className="offset-lg">
                <form  className="container">
                    <div className="card">
                        <div className="card-header">
                             <h1>login</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>username<span className="errmsg">*</span></label>
                                <input className="form-control" value={username} onChange={e=>setusername(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label>password<span className="errmsg">*</span></label>
                                <input className="form-control" value={email} onChange={e=>setemail(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label>password<span className="errmsg">*</span></label>
                                <input className="form-control" value={password} onChange={e=>setpassword(e.target.value)}></input>
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