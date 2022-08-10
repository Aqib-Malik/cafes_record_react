import React, { Component } from 'react'
import axios from 'axios';
import Swal from "sweetalert2";
// import './in.css'
class add_record extends Component {
  constructor(props) {
    super(props);
  }
  
  
  
  state = {
    name: "",
    location: "",
    type: "",
    credentials: { empname: "irtaza", sallery: 12345678, email: "irt@gmail.com" },
  };

  add_rec = () => {
    if(this.state.name!="" && this.state.location!="" && this.state.type!=""){
    axios.post('http://localhost:8080/api/cafe/add', JSON.stringify({
      name: this.state.name,//this.state.credentials.empname,
      location: this.state.location,
      type: this.state.type,//this.state.credentials.email,
    }))
      .then(response => {
        if (response.status == 201) {
          Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'Record Added Sussessfully.',
            icon: 'success',
          });


          this.setState({
            location: this.state.location = "",
            name: this.state.name = "",
            type: this.state.type = "",

          })


        }



      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });


    }
  }
  add_new_record = () => {
    if (this.state.name != "" && this.state.location != "" && this.state.type != "") {
      try {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {

          method: 'POST',
          // headers: { 'Content-Type': 'Access-Control-Allow-Headers' },
          body: JSON.stringify({
            name: this.state.name,//this.state.credentials.empname,
            location: this.state.location,
            type: this.state.type,//this.state.credentials.email,
          })
        };
        fetch(
          'http://localhost:8080/api/cafe/add'//'http://localhost:8080/cafe_add'
          , requestOptions)
          .then(response => {
            alert("status code :", response)
            if (response.status == 201) {
              Swal.fire({
                title: 'Success',
                type: 'success',
                text: 'Record Added Sussessfully.',
                icon: 'success',
              });


              this.setState({
                location: this.state.location = "",
                name: this.state.name = "",
                type: this.state.type = "",

              })


            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              });
            }

          })
        // .then(data => this.setState({Id: data.id, }))
      } catch (e) {
        alert(e)
      }

    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete Information',
        text: 'Please fill all fields!!',
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
    return (<>
      <section className="vh-100 gradient-custom">
        <div className="container h-100">
          <br />

          <div className="row d-flex justify-content-center align-items-center h-100"  >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add New Cafe's Record</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-hotel fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" value={this.state.name} onChange={this.onchange} name="name" />
                            <label className="form-label" for="form3Example1c">Cafe Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-map fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" value={this.state.location} onChange={this.onchange} name="location" />
                            <label className="form-label" for="form3Example3c">Cafe Location</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-list fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" value={this.state.type} onChange={this.onchange} name="type" />
                            <label className="form-label" for="form3Example1c">Cafe Type</label>
                          </div>
                        </div>





                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={this.add_rec}>Add Record</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://cdn.dribbble.com/users/65712/screenshots/813794/dribbble-ready.gif"
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>











      {/* <div classNameName="container">    
        <div id="loginbox" style={{marginTop:"50px"}} classNameName="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
            <div classNameName="panel panel-info" >
                    <div classNameName="panel-heading">
                        <div classNameName="panel-title">Sign In</div>
                        <div style={{float:"right", fontSize: "80%", position: "relative; top:-10px"}}><a href="#">Forgot password?</a></div>
                    </div>     

                    <div style={{paddingTop:"30px"}} classNameName="panel-body" >

                        <div style={{display:"none"}} id="login-alert" classNameName="alert alert-danger col-sm-12"></div>
                            
                        <form id="loginform" classNameName="form-horizontal" role="form">
                                    
                            <div style={{marginBottom: "25px"}} classNameName="input-group">
                                        <span classNameName="input-group-addon"><i classNameName="glyphicon glyphicon-user"></i></span>
                                        <input id="login-username" type="text" classNameName="form-control" name="username" value="" placeholder="username or email"/>                                        
                                    </div>
                                
                            <div style={{marginBottom: "25px"}} classNameName="input-group">
                                        <span classNameName="input-group-addon"><i classNameName="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password" type="password" classNameName="form-control" name="password" placeholder="password"/>
                                    </div>
                                    

                                
                            <div classNameName="input-group">
                                      <div classNameName="checkbox">
                                        <label>
                                          <input id="login-remember" type="checkbox" name="remember" value="1"/> Remember me
                                        </label>
                                      </div>
                                    </div>


                                <div style={{marginTop:"10px"}} classNameName="form-group">

                                    <div classNameName="col-sm-12 controls">
                                      <a id="btn-login" href="#" classNameName="btn btn-success">Login  </a>
                                      <a id="btn-fblogin" href="#" classNameName="btn btn-primary">Login with Facebook</a>

                                    </div>
                                </div>


                                <div classNameName="form-group">
                                    <div classNameName="col-md-12 control">
                                        <div style={{borderTop: "1px solid#888", paddingTop:"15px", fontSize:"85%"}} >
                                            Don't have an account! 
                                        <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                            Sign Up Here
                                        </a>
                                        </div>
                                    </div>
                                </div>    
                            </form>     



                        </div>                     
                    </div>  
        </div>
        <div id="signupbox" style={{display:"none", marginTop:"50px"}} classNameName="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div classNameName="panel panel-info">
                        <div classNameName="panel-heading">
                            <div classNameName="panel-title">Sign Up</div>
                            <div style={{float:"right", fontSize: "85%", position: "relative", top:"-10px"}}><a id="signinlink" href="#" onclick="$('#signupbox').hide(); $('#loginbox').show()">Sign In</a></div>
                        </div>  
                        <div classNameName="panel-body" >
                            <form id="signupform" classNameName="form-horizontal" role="form">
                                
                                <div id="signupalert" style={{display:"none"}} classNameName="alert alert-danger">
                                    <p>Error:</p>
                                    <span></span>
                                </div>
                                    
                                
                                  
                                <div classNameName="form-group">
                                    <label for="email" classNameName="col-md-3 control-label">Email</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="email" placeholder="Email Address"/>
                                    </div>
                                </div>
                                    
                                <div classNameName="form-group">
                                    <label for="firstname" classNameName="col-md-3 control-label">First Name</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="firstname" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div classNameName="form-group">
                                    <label for="lastname" classNameName="col-md-3 control-label">Last Name</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="lastname" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div classNameName="form-group">
                                    <label for="password" classNameName="col-md-3 control-label">Password</label>
                                    <div classNameName="col-md-9">
                                        <input type="password" classNameName="form-control" name="passwd" placeholder="Password"/>
                                    </div>
                                </div>
                                    
                                <div classNameName="form-group">
                                    <label for="icode" classNameName="col-md-3 control-label">Invitation Code</label>
                                    <div classNameName="col-md-9">
                                        <input type="text" classNameName="form-control" name="icode" placeholder=""/>
                                    </div>
                                </div>

                                <div classNameName="form-group">
                                    <div classNameName="col-md-offset-3 col-md-9">
                                        <button id="btn-signup" type="button" classNameName="btn btn-info"><i classNameName="icon-hand-right"></i> &nbsp Sign Up</button>
                                        <span style={{marginLeft:"8px"}}>or</span>  
                                    </div>
                                </div>
                                
                                <div style={{borderTop: "1px solid #999", paddingTop:"20px"}}  classNameName="form-group">
                                    
                                    <div classNameName="col-md-offset-3 col-md-9">
                                        <button id="btn-fbsignup" type="button" classNameName="btn btn-primary"><i classNameName="icon-facebook"></i>   Sign Up with Facebook</button>
                                    </div>                                           
                                        
                                </div>
                                
                                
                                
                            </form>
                         </div>
                    </div>
                    </div>
                    </div> */}

      {/* <body>
    <div id='add'>
    <div classNameNameNameName="background">
        <div classNameNameNameName="shape"></div>
        <div classNameNameNameName="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
        <div classNameNameNameName="social">
          <div classNameNameNameName="go"><i classNameNameNameName="fab fa-google"></i>  Google</div>
          <div classNameNameNameName="fb"><i classNameNameNameName="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
</body> */}
    </>);
  }
}

export default add_record;