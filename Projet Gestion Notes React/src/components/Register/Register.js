import React ,{useState}from 'react';
import "./Register.css"
import { Link } from "react-router-dom";
import logo from "./logo2.png"


function Register() {
    const [email,setemail]=useState("");
    const [Fusername,setfusername]=useState("");
    const[Lusername,setlusername]=useState("");
    const [pwd1,setpwd1]=useState("");
    const [cpwd,setcpwd]=useState("");

    const handelsubmit=(e)=>{
      e.preventDefault();
    }
  return (
    
    <div className="main-Register">
         
      <div className='left-side2'>
        {/* <div className='header'>
          </div> */}
        {/* </div><div className='body-Register'> */}

        
          <img src={logo} id="logo-id2" alt="" srcSet="" />
       
        {/* <p className="text-reg">hiiii</p> */}
      </div>
      <div className='right-side2'>
        <div className="top-right-reg">
          <h6 className="text-sign"> Already have an Account ?
            <Link id="link-reg" to='/Login'>Sign In</Link>
          </h6>
        </div>
        <div className="body-reg-right">
        
            <div className="reg-container"> 
            <h4 className="h1">Sing Up</h4>
             <form  className="forme" onSubmit={ handelsubmit}>
              <div className='input-reg'>
                <h6 className="h5">First Name</h6>
                <input type="text" className="all-input" value={Fusername}
                onChange={(e)=>{setfusername(e.target.value)}} name="Fname" id="fname" />
                </div>

                <div className='input-reg'>
                  <h6 className="h5">Last Name</h6>
                  <input type="text" className="all-input" value={Lusername}
                onChange={(e)=>{setlusername(e.target.value)}} name="lname" id="lname" />
                  </div>
                  <div className='input-reg'>
                    <h6 className="h5">Email</h6>
                    <input type="email" className="all-input" value={email}
                onChange={(e)=>{setemail(e.target.value)}} name="email" id="email" />
                    </div>
                    <div className='input-reg'>
                      <h6 className="h5">Password</h6>
                      <input type="password" className="all-input" value={pwd1}
                onChange={(e)=>{setpwd1(e.target.value)}}  name="password" id="pwd" />
                      </div>
                      <div className='input-reg'>
                        <h6 className="h5">Confirm Password</h6>
                        <input type="password" className="all-input"value={cpwd}
                onChange={(e)=>{setcpwd(e.target.value)}}  name="password" id="c-pwd" />
                      </div>
                      <input type="button" id="button-reg" value="Submit"/>
                       </form>
                      </div>
                </div>
              </div>
            </div>
      );
}

      export default Register;

