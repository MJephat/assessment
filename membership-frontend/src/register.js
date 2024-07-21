// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Validation from "./registerValidation";
// import axios from "axios";

// const Register = () => {
//     const [errors, setErrors] = useState({});
//     const [values, setValues] = useState({
//         username: "",
//         email: "",
//         password: ""
//     });

//     const handleInput = (event) => {
//       setValues((prev) => ({
//         ...prev,
//         [event.target.name]: [event.target.value],
//       }));
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setErrors(Validation(values));
//       if(errors.username === "" && errors.email==="" && errors.password === "" ){
//             axios.post("http://localhost:5000/api/auth/register", values)
//               .then(res => console.log(res))
//               .catch(err => console.log(err));
//         }
//     };

    
//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h4> Register here!</h4>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username">
//               <strong>Username</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your username"
//               className="form-control rounded-0"
//               onChange={handleInput}
//               name="username"
//             />
//             {errors.username && (
//               <span className="text-danger">{errors.username}</span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your email address"
//               className="form-control rounded-0"
//               onChange={handleInput}
//               name="email"
//             />
//             {errors.email && (
//               <span className="text-danger">{errors.email}</span>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="form-control rounded-0"
//               onChange={handleInput}
//               name="password"
//             />
//             {errors.password && (
//               <span className="text-danger">{errors.possword}</span>
//             )}
//           </div>
// {/* 
//           <div className="mb-3">
//             <label htmlFor="confirm password">
//               <strong>Confirm Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="confirm your password"
//               className="form-control rounded-0"
//               onChange={handleInput}
//             />
//           </div> */}
//           <button type= "submit" className="btn btn-success w-100 rounded-0">
//             <strong>Register</strong>
//           </button>
//           <p>Already have an account?</p>
//           <Link
//             to="/"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Login here!
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
