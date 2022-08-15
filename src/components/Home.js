import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [products, setProduct] = useState([]);
  

  useEffect(() => {

    // courseList
    // var a = localStorage.getItem('user_id');
    // console.log("@@@@@@@@@@@@@@@@@@@@@")
    // console.log(a)
    // fetch(`http://127.0.0.1:8000/api/courses/?search=${a}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((resp) => resp.json())
    //   .then((resp) => setProduct(resp))
    //   .catch((error) => console.log(error));
    // console.log("$$$$$$$$$$");
    // console.log(products);

    
     //QuizList
     var a = localStorage.getItem('class');
     console.log("@@@@@@@@@@@@@@@@@@@@@")
     console.log(a)
     fetch("http://localhost:8080/api/cafe/getall", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     })
       .then((resp) => resp.json())
       .then((resp) => setProduct(resp))
       .catch((error) => console.log(error));
     console.log("$$$$$$$$$$");
     console.log(products.data);



       }

  );

  return (
    <section className="section-padding">
      <div className="container">
        
        <div className="row">
          
          <div className="col-12 text-center mb-30">
            <h2 className="section-title">List of Quizez</h2>
          </div>
          <div className="col-lg-12">
            {/* <div className="nav-scrollable">
              <nav className="nav d-flex justify-content-between">
                <Link to={"/"} className="active">
                  All
                </Link>
                <Link to={"/"}>Development</Link>
                <Link to={"/"}>Design</Link>
                <Link to={"/"}>Marketing</Link>
                <Link to={"/"}>Lifestyle</Link>
                <Link to={"/"}>IT & Software</Link>
                <Link to={"/"}>Personal</Link>
                <Link to={"/"}>Development</Link>
                <Link to={"/"}>Business</Link>
                <Link to={"/"}>Music</Link>
              </nav>
            </div> */}
          </div>
        </div>

        <div className="row justify-content-center">
          {products.map((product) =>
            product ? (
              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="card course-card">
                  {/* {product.course_id.course_name} */}
                 
                  <div> 

                  {/* <a href={`${product.file}`}>`${product.file}`</a>   <br></br> */}
                  {/* Uploaded By :{product.Teacher_id.user.username}<br></br> */}
                  {/* class : {product.classs.class_name} */}

            {/* {
                (() => {
                    if(`${product.file}`==null) {
                            return (
                                <p>No video</p>
                            )
                        } else if ('b'==='b') {
                            return (
                            <a href={`${product.file}`}>`${product.file}`</a>
                            )
                        } else {
                            return (
                              <video width="750" height="500" controls >
                              <source src={`${product.file}`} type="video/mp4" />
                            </video>
                            )
                        }
                })()  
            }   */}
        </div>  
                  {/* <video width="750" height="500" controls >
                    <source src={`${product.file}`} type="video/mp4" />
                  </video> */}
                  
                  {/* <div className="px-30">
                    <div className="card-footer px-0 bg-transparent mb-10 d-flex justify-content-between align-items-center">
                      <div className="rating text-primary">
                        <span className="font-weight-600">4.3</span>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="price h6">
                        $12.99 <s>$12.99</s>
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            ) : null
          )}
        </div>





    <br></br><br></br>

         
            
              


    
              
        


        
     
      </div>

      






      
    </section>
  );
}

export default Home;
