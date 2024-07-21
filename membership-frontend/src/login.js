// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import  validation from './loginValidation';

// const Login = () => {
//     const [errors, setErrors] = useState({})
//     const [values, setValues] = useState({
//         username: '',
//         password:''
//     })

//     const handleInput=(event)=>{
//         setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         setErrors(validation(values));
//     }

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h3> Sign-in</h3>

//         <form action="" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username">
//               <strong>Username</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="username"
//               className="form-control rounded-0"
//               onChange={handleInput}
//               name='username'
//             />
//             {errors.username && <span className='text-danger'>{errors.username}</span>}
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
//               name='password'/>
//             {errors.password && <span className='text-danger'>{errors.password}</span>}

//           </div>
//           <button type='submit' className="btn btn-success w-100 rounded-0">
//             <strong>Login</strong>
//           </button>
//           <p>You don't have an account?</p>
//           <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//             Create Account
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login