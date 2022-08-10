import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { Alert } from 'bootstrap';
import axios from 'axios';
import { useState } from 'react';

class newdata extends Component {
  
    
    state = {
      credentials: { empname: "irtaza", sallery: 12345678,email: "irt@gmail.com" },
    };
    inputChanged = (event) => {
      console.log(event.target.value);
      // const cred = this.state.credentials;
      // cred[event.target.name] = event.target.value;
      // this.setState({ credentials: cred });
    };

    register = (event) => {
      
  
    axios.post('http://localhost:8080/employee_add', this.state.credentials)
          .then(response =>{
            alert(response)
            if(response.status==200){
              console.log(response.data)
              
            }
          });
    };




    add_new_record() {
      try{
      alert(this.state.credentials.empname);
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': 'Access-Control-Allow-Headers' },
            body: JSON.stringify({  
                empname: "kjh",//this.state.credentials.empname,
            sallery:7896,
            email:"fghj",//this.state.credentials.email,
})
        };
        fetch('http://localhost:8080/employee_add', requestOptions)
            .then(response => alert(response))
            // .then(data => this.setState({Id: data.id, }))
      }catch (e) {
        alert(e)
      }
      }
    render() {
        return (
                   <div style={{padding:"5%"}}>
                    <h1>
        New Record <Badge bg="secondary">Add Record</Badge>
      </h1>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <input  placeholder="Enter Name" className="form-control shadow-none rounded-sm"
                      type="text"
                      name="empname"
                      value={this.state.credentials.empname}
                      onChange={this.inputChanged}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSallery">
        <Form.Label>Sallery</Form.Label>
        <Form.Control type="number" placeholder="Enter Sallery" 
        name="sallery"
        value={this.state.credentials.sallery}
        onChange={this.inputChanged}
        />
        <Form.Text className="text-muted">
          We'll never share your sallery with anyone else.
        </Form.Text>
      </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        name="email"
        // value={this.state.credentials.email}
        onChange={this.inputChanged}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" 
      onClick={this.add_new_record}
      // onClick={this.register}
      >
        Submit
      </Button>
    </Form>
            </div>
            
        );
    }
}

export default newdata;