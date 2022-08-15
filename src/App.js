import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';
import NavBar from './components/NavBar';
import Add_record from './components/add_record';
import AllData from './components/allData';
import Info from './components/Info';
import Uptadedata from './components/Uptadedata';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Detail from './components/detail/detail';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link
  // Switch

} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Component, useState } from 'react';
class App extends Component {
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
    var article = { email: 'safi@go.com',password:"12345678" };
    // axios.post('http://localhost:8080/api/token', article)
    // .then(response => console.log(response))
    // ;


    fetch('http://localhost:8080/api/token',{
      mode: 'no-cors',
      method:"POST",
      body:
      JSON.stringify(
      {
        email: "safi@go.com",
        password: "12345678"
    })
  
    }).then((Response)=>{
      Response.json().then(body => {
        console.log(body.token);
        localStorage.setItem('token',body.token)
        localStorage.setItem('login',true)
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
    })
  }

  onchange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // const[data,setData]=useState(null)
  // function getValue(val){
  //   setData(val.target.value)
  //   console.warn(val.target.value);
  // }
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log(data);
  // }

  // const [details,setDetails]=useState({
  //   name:"",
  //   email:"",
  //   sallery:"",
  // })
  //  const handleChange=(e)=>{
  //       // console.log(e.target.value);
  //       const{name,value}=e.target;
  //       setDetails((prev)=>{
  //         return {...prev,[name]:value};
  //       })
  //  }

  //  const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(details);
  //  }
  render(){
  return (

  // <form onSubmit={handleClick}>
  //   <h1>Name :</h1><input name='name' type="text" onChange={getValue}/><br/>
  //   <h1>email :</h1><input name='email' type="text" onChange={getValue}/><br/>
  //   <h1>sallery :</h1><input name='sallery' type="text" onChange={handleChange}/><br/>
  //   <button type='submit'>submit</button>
  // </form>

///////////////////////////////////
    // <BrowserRouter>
    // <NavBar/>
    // {/* <Link to="/detail">Detail</Link>
    // <br/>
    // <Link to="/">Home</Link> */}
    //   <Routes>
    //     <Route path='/' element={<Counter/>}/>
    //     <Route path='/new' element={<Add_record/>}/>
    //     <Route path='/detail' element={<Info/>}/>
    //     <Route path='/update' element={<Uptadedata/>}/>
    //     <Route path='/signup' element={<Signup/>}/>
    //   </Routes>
    // </BrowserRouter>



    <div>
      
      {/* <Home/> */}
       <BrowserRouter>
    <NavBar/>
    {/* <Link to="/detail">Detail</Link>
    <br/>
    <Link to="/">Home</Link> */}
      <Routes>
      {localStorage.getItem('token')==null?
                <Route path='/' element={<Login/>}/>            
                 :               
                  <Route path='/' element={<Counter/>}/>}
                   {/* <Route path='/' element={<Counter/>}/> */}
              {/* } <Route path='/' element={<Counter/>}/> */}
        <Route path='/new' element={<Add_record/>}/>
        <Route path='/detail' element={<Info/>}/>
        <Route path='/update' element={<Uptadedata/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>

  
    </div>
  );
}
}

export default App;
