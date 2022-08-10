import React, { Component } from 'react';
import {Link,useParams,useLocation,Location} from 'react-router-dom'
import Swal from "sweetalert2";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}
const Uptadedata=()=>{
 
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
// const update_record=()=> {
//   try{
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
      
//         method: 'POST',
//         // headers: { 'Content-Type': 'Access-Control-Allow-Headers' },
//         body: JSON.stringify({  
//             name: "aqib",//this.state.credentials.empname,
//         location:"this.state.location",
//         type:"this.state.type",//this.state.credentials.email,
// })
//     };
//     fetch('http://localhost:8080/cafe_update/9', requestOptions)
//         .then(response => {
//         if(response.status==200){
//           Swal.fire({  
//               title: 'Success',  
//               type: 'success',  
//               text: 'Record Added Sussessfully.', 
//               icon: 'success', 
//             }); 
          
//         }else{
//           Swal.fire({  
//               icon: 'error',  
//               title: 'Oops...',  
//               text: 'Something went wrong!',    
//             }); 
//       }
      
//       })
//         // .then(data => this.setState({Id: data.id, }))
//   }catch (e) {
//     alert(e)
//   }
//   }


      
    return ( 
        <section className="h-100 h-custom gradient-custom" style={{backgroundColor: "#8fc4b7"}}>
<div className="container py-5 h-100">
  <h1></h1>
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-8 col-xl-6">
      <div className="card rounded-3">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
          className="w-100" style={{borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem"}}
          alt="Sample photo"/>
        <div className="card-body p-4 p-md-5">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Update {location.state.name}</h3>

          <form className="px-md-2">

            <div className="form-outline mb-4">
              <input type="text" id="form3Example1q" className="form-control" value={location.state.name} />
              <label className="form-label" for="form3Example1q">Name</label>
            </div>
            <div className="form-outline mb-4">
              <input type="text" id="form3Example1q" className="form-control" value={location.state.location} />
              <label className="form-label" for="form3Example1q">Location</label>
            </div>
            <div className="form-outline mb-4">
              <input type="text" id="form3Example1q" className="form-control" value={location.state.type} />
              <label className="form-label" for="form3Example1q">Type</label>
            </div>

            
            
            <button type="submit" className="btn btn-success btn-lg mb-1" 
            // onClick={logout}
            >Update Record</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</section>
    );

}
export default Uptadedata;