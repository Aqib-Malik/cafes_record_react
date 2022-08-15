import React, { Component } from 'react';
import Swal from "sweetalert2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  // Switch

} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        login:false,
        email: "",
        password: "",
        type: "",
        credentials: { empname: "irtaza", sallery: 12345678, email: "irt@gmail.com" },
      };
    
      login(){
        if(this.state.email!="" && this.state.password!="" ){
        var article = { email: 'safi@go.com',password:"12345678" };
        // axios.post('http://localhost:8080/api/token', article)
        // .then(response => console.log(response))
        // ;
    
    
        fetch('http://localhost:8080/api/token',{
        //   mode: 'no-cors',
          method:"POST",
          body:
          JSON.stringify(
          {
            email: this.state.email,
            password: this.state.password
        })
      
        }).then((Response)=>{
            console.log(Response);
          Response.json().then(body => {
            console.log(body);
            localStorage.setItem('token',body.token)
            localStorage.setItem('login',true)
            Swal.fire({
              title: 'Login',
              type: 'success',
              text: 'Successfully Login',
              icon: 'success',
            });
            window.location.reload(); 
          });
          this.setState({
            login:true
          })
          // console.log(Response.json())
    
          // Response.JSON().then((result)=>{
          //   console.warn(result);
          //   localStorage.setItem('login',JSON.stringify({
          //     login:true,
          //     tokes:result.token
          //   }))
          //   this.setState({login:true})
          // })
        })}

        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });

        }
      }
    
      onchange = e => {
        console.log(e.target.value);
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
    render() { 
        return ( 
            <section className="vh-100 gradient-custom">
        <div className="container h-100">
          <br />

          <div className="row d-flex justify-content-center align-items-center h-100"  >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                      <form className="mx-1 mx-md-4">

                       

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-map fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" value={this.state.email} onChange={this.onchange} name="email" />
                            <label className="form-label" for="form3Example3c">Email*</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-list fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example1c" className="form-control" value={this.state.password} onChange={this.onchange} name="password" />
                            <label className="form-label" for="form3Example1c">Password*</label>
                          </div>
                        </div>





                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={()=>{this.login()}}>Log In</button>
                        </div>
                        {/* <Link to="signup" style={{color:"white",textDecoration: 'none'}}>if u dont have an account?signup</Link> */}

                        {/* <button type="button" class="btn btn-warning"><Link to="/signup" style={{color:"white",textDecoration: 'none'}}>Update</Link></button> */}
                      </form>
                      
                    <Link to="signup" style={{color:"blue",textDecoration: 'none',marginLeft:"50px"}}>if u dont have an account?signup</Link>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://www.layojatltd.com/images/security.gif"
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        
        
        
        // <center>
        //     <h1>Login</h1>
            
        //     <div>
        
        //     <input type="text" value={this.state.email} onChange={this.onchange} name="email"/><br/><br/>
        //     <input type="password" value={this.state.password} onChange={this.onchange} name="password"/><br/><br/>
        //     {/* <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/><br/><br/> */}
        //     <button onClick={()=>{this.login()}}>Login</button>
        //   </div>
        //   </center>
           );
    }
}
 
export default Login;