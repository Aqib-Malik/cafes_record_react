import React, { Component } from 'react';
import {Link,useParams,useLocation,Location} from 'react-router-dom'

const Info=()=>{
    // const {type}=useParams()
    // const statePramVal=useLocation().state.stateParam;
    // console.log(type)
    // console.log(props.Location.state)
//     const location = useLocation();
// const data = location.state;
// console.log(data);
const location = useLocation();
// const data = location.state;

React.useEffect(()=>{
  console.log(location.state.name);
}, [])
      
    return ( 
        <section className="h-100 h-custom gradient-custom">
<div className="container py-5 h-100">
  <h1></h1>
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-8 col-xl-6">
      <div className="card rounded-3">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
          className="w-100" style={{borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem"}}
          alt="Sample photo"/>
        <div className="card-body p-4 p-md-5">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">{location.state.name} Details</h3>

          <form className="px-md-2">

            <div className="form-outline mb-4">
              <input type="text" id="form3Example1q" className="form-control" value={location.state.name} readOnly={true}/>
              <label className="form-label" for="form3Example1q">Name</label>
            </div>
            <div className="form-outline mb-4">
              <input type="text" id="form3Example1q" className="form-control" value={location.state.location} readOnly={true}/>
              <label className="form-label" for="form3Example1q">Location</label>
            </div>
            <div className="form-outline mb-4">
              <input type="text" id="form3Example1q" className="form-control" value={location.state.type} readOnly={true}/>
              <label className="form-label" for="form3Example1q">Type</label>
            </div>

            
            

          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</section>
    );

}
export default Info;