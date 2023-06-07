// import axios from 'axios';
// import React, { useState } from 'react';

// const Signup = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     work: "",
//     password: "",
//     cpassword: ""
//   });

//   const handleInputs = (e) => {
//     const { name, value } = e.target;
//     setUser((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const PostData = async (e) => {
//     e.preventDefault();
//     const { name, email, phone, work, password, cpassword } = user;

//     try {
//       const response = await axios.post("/api/register", {

//           name,
//           email,
//           phone,
//           work,
//           password,
//           cpassword
//         // })
//       });

//       if (response.status === 201) {
//         window.alert('User registered successfully');
//         window.location.href = '/login';
//       } else {
//         window.alert('Failed to register user');
//       }
//     }
//      catch (error) {
//     console.log('Server error. Please try again.');
//   }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100">
//       <div className="row w-50">
//         {/* Left Section */}
//         <div className="col-md-7 bg-light p-4 d-flex flex-column align-items-center justify-content-center">
//           <h2 className="text-center">Sign Up</h2>
//           <form onSubmit={PostData} className="d-flex flex-column align-items-center">
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               onChange={handleInputs}
//               autoComplete="off"
//               placeholder="Your name"
//               className="form-control m-2"
//             />
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleInputs}
//               autoComplete="off"
//               placeholder="Your email"
//               className="form-control m-2"
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={user.phone}
//               onChange={handleInputs}
//               autoComplete="off"
//               placeholder="Mobile number"
//               className="form-control m-2"
//             />
//             <input
//               type="text"
//               name="work"
//               value={user.work}
//               onChange={handleInputs}
//               autoComplete="off"
//               placeholder="Your profession"
//               className="form-control m-2"
//             />
//             <input
//               type="password"
//               name="password"
//               value={user.password}
//               onChange={handleInputs}
//               autoComplete="off"
//               placeholder="Password"
//               className="form-control m-2"
//             />
//             <input
//               type="password"
//               name="cpassword"
//               value={user.cpassword}
//               onChange={handleInputs}
//               autoComplete="off"
//               placeholder="Confirm your password"
//               className="form-control m-2"
//             />
//             <button type="submit" className="btn btn-primary w-50 m-2">Register</button>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="col-md-5 bg-light p-4 d-flex flex-column align-items-center justify-content-center">
//           <img src="https://source.unsplash.com/400x400/?laptop?ai" alt="Laptop" className="img-fluid mb-4" />
// <p className="text-center">Already a user?</p>
// <a href="/login" className="text-primary text-center">Login</a>
// </div>
// </div>
// </div>
// );
// };

// export default Signup;

import React, { useState } from "react";
import { NavLink,Navigate } from 'react-router-dom';


const Signup = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
     let name,value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        }),
      });

      const data = await response.json();
      console.log(response);
      if (response.status === 201) {
        window.alert("User registered successfully");
        console.log("User registered successfully");
        // Redirect to the login page
        window.location.href = "/login";
      } else {
        window.alert("Failed to register user");
        console.log("Failed to register user");
      }
    } catch (error) {
      console.log("Server error. Please try again.", error);
    }
  };

  return (
    // ... rest of the component code

    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-50">
        {/* Left Section */}
        <div className="col-md-7 bg-light p-4 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-center">Sign Up</h2>
          <form
            onSubmit={PostData}
            className="d-flex flex-column align-items-center"
          >
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              autoComplete="off"
              placeholder="Your name"
              className="form-control m-2"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              autoComplete="off"
              placeholder="Your email"
              className="form-control m-2"
            />
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              autoComplete="off"
              placeholder="Mobile number"
              className="form-control m-2"
            />
            <input
              type="text"
              name="work"
              value={user.work}
              onChange={handleInputs}
              autoComplete="off"
              placeholder="Your profession"
              className="form-control m-2"
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              autoComplete="off"
              placeholder="Password"
              className="form-control m-2"
            />
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              autoComplete="off"
              placeholder="Confirm your password"
              className="form-control m-2"
            />
            <button type="submit" className="btn btn-primary w-50 m-2">
              Register
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="col-md-5 bg-light p-4 d-flex flex-column align-items-center justify-content-center">
          <img
            src="https://source.unsplash.com/400x400/?laptop?ai"
            alt="Laptop"
            className="img-fluid mb-4"
          />
          <p className="text-center">Already a user?</p>
          <a href="/login" className="text-primary text-center">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
