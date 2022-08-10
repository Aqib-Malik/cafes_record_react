import React, { Component } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';

import {
	// BrowserRouter as Router,
	// Routes,
	// Route,
	Link
} from 'react-router-dom';
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            updateShow:false
        };
    }

    

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "http://localhost:8080/api/cafe/getall",
            {
                // mode: 'no-cors',
                // headers:{
                //     'Authorization':localStorage.getItem("token")//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZmkiLCJlbWFpbCI6InNhZmlAZ28uY29tIiwiZXhwIjoxNjYwMDY0NDQxfQ.Gg6YbwgUG77IqKbf9S79P1nLxryU5uo6kFYUkDhCpAU"//localStorage.getItem('token')
                // }
            })
            .then((res) => {
                // alert(res)
                console.log(res)
                res.json().then(body => {
                    console.log(body);
                    this.setState({
                        items: body.data,
                        DataisLoaded: true
                    });
                    // localStorage.setItem('token',body.token)
                    // localStorage.setItem('login',true)
                  });
            // res.json()
        }
            )
            // .then((json) => {
            //     console.log(json.data)
            //     this.setState({
            //         items: json.data,
            //         DataisLoaded: true
            //     });
            // })
    }

    del(e,id){
        axios.delete('http://localhost:8080/api/cafe/delete/'+id)
        .then(response => alert('Delete successful'))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    HandleClick1(e,id) {  
        Swal.fire({ 

            title: 'Are you sure?',  
            icon: 'warning',  
            confirmButtonColor: '#3085d6',  
            cancelButtonColor: '#d33', 

        text: "Are you sure you want to Delete this record..!!! ",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes'
    }).then(function(result) { 
        if (result.value) {
            try{
                // Simple POST request with a JSON body using fetch
                const requestOptions = {
                  
                    method: 'DELETE',
                    // headers: { 'Content-Type': 'Access-Control-Allow-Headers' },
        //             body: JSON.stringify({  
        //                 name: this.state.name,//this.state.credentials.empname,
        //             location:this.state.location,
        //             type:this.state.type,//this.state.credentials.email,
        // })
                };
                fetch('http://localhost:8080/api/cafe/delete/'+id, requestOptions)
                    .then(response => {
                        // if(response.status==200){
                            Swal.fire({  
                                title: 'Success',  
                                type: 'success',  
                                text: 'Record Added Sussessfully.', 
                                icon: 'success', 
                              });
                              window.location.reload(); 
                        // }
                        // else{
                        //     Swal.fire({  
                        //         icon: 'error',  
                        //         title: 'Oops...',  
                        //         text: 'Something went wrong!',    
                        //       }); 
                        // }
                        })
                    // .then(data => this.setState({Id: data.id, }))
              }catch (e) {
                alert(e)
              }



        //     axios.delete('http://localhost:8080/cafe_delete/4')
        // .then(response => alert('Delete successful'))
        // .catch(error => {
        //     console.error('There was an error!', error);
        // });            
        }   
        });  }

    render() {
        //  this.state.updateShow?
        
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            
            <div style={{backgroundColor: "#8fc4b7",padding:"50px"}} className="gradient-custom">
                {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" style={{marginLeft:"700px"}}>Log Out</button>
                        </div> */}
                <div>
                <h1>Islamabad's Cafe<span class="badge badge-secondary">Records</span></h1>
 
                </div>
                
                <table class="table table-light" >
                    <thead>
                        <tr style={{padding:"17px"}}>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Type</th>
                            <th scope="col">Details</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr style={{padding:"17px"}}>
                            <td>{item.ID}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.type}</td>
                            <td><button type="button" class="btn btn-primary">
            <Link to="/detail" state={{name:item.name,location:item.location,type:item.type}} style={{color:"white",textDecoration: 'none'}}>Detail</Link>
        </button></td>
                            <td><button type="button" class="btn btn-danger" onClick={(event) =>this.HandleClick1(event,item.ID)}>Delete</button></td>
                            <td><button type="button" class="btn btn-warning"><Link to="/update" state={{id:item.ID,name:item.name,location:item.location,type:item.type}} style={{color:"white",textDecoration: 'none'}}>Update</Link></button></td>
                        </tr>
                    ))}
                        
                                          </tbody>
                </table>

            </div>
        );

        //         (
        //             <div >

        //             <table class="table table-dark">
        //   <thead>
        //     <tr>
        //       <th scope="col">#</th>
        //       <th scope="col">First</th>
        //       <th scope="col">Last</th>
        //       <th scope="col">Handle</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <th scope="row">1</th>
        //       <td>Mark</td>
        //       <td>Otto</td>
        //       <td>mdo</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">2</th>
        //       <td>Jacob</td>
        //       <td>Thornton</td>
        //       <td>fat</td>
        //     </tr>
        //     <tr>
        //       <th scope="row">3</th>
        //       <td>Larry</td>
        //       <td>the Bird</td>
        //       <td>twitter</td>
        //     </tr>
        //   </tbody>
        // </table>
        // </div>
        //         );
    }

}

export default Counter;