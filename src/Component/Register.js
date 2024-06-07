import React,{ useState,useEffect} from "react";
import './Register.css'
import {Link,Navigate,useNavigate} from "react-router-dom";



const Register=()=>{



    
    const[username, setusername]=useState("");
    const[email, setemail]=useState("");
    const[password1, setpassword1]=useState("");
    const[password2, setpassword2]=useState("");

    // const[phone, setphone]=useState("");
    const navigate=useNavigate("");
    
    
    const handelsubmit=(e)=>{
        e.preventDefault();
        let regobj={username,email,password1,password2};
        console.log(regobj);
        fetch('https://vpn-test-django.chbk.run/api/rest_auth/registration/',{
            method:"POST",
            headers:{'content-type' :'application/json'},
            body:JSON.stringify(regobj),
    }).then((res)=>{
        console.log('registerd')
        navigate('/login');
        
    }).catch((err)=>{
        console.log("failed")
    })
    }
//       useEffect(() => {
//     const Request = async () => {

//       const res= await fetch('https://vpn-test-django.chbk.run/api/plans/')
//       const resData = await res.json()
//       console.log(resData)
//     }
//     Request()

//   }, []);
    
    return(


        <div >
            <div className="all">
                <form className="container" onSubmit={handelsubmit}>
                    <div className="card">
                        <div className="card-header"> 
                        <h1>user register </h1> 
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg">
                                    <div className="form-group">
                                        <label>username<span className="errmsg">*</span></label>
                                        <input className="form-control" required value={username} onChange={e=>setusername(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="col-lg">
                                    <div className="form-group">
                                        <label>email<span className="errmsg">*</span></label>
                                        <input className="form-control" required value={email} onChange={e=>setemail(e.target.value)}></input>
                                    </div>
                                </div>
                          
                                <div className="col-lg">
                                    <div className="form-group">
                                        <label>password1<span className="errmsg">*</span></label>
                                        <input className="form-control"  name="password" required type="password" value={password1} onChange={e=>setpassword1(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="form-group">
                                        <label>password2<span className="errmsg">*</span></label>
                                        <input className="form-control"  name="password" type="password" required value={password2} onChange={e=>setpassword2(e.target.value)}></input>
                                    </div>
                                </div>
        



                            </div>
                        </div>
                            <button type="submit" className="btn">register</button>

                        </div>

                    </div>
                </form>
            </div>
           
        </div>
    )



}


export default Register;