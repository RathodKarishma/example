// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!email || !password) {
//       setErrorMessage('Both fields are required');
//       return;
//     }

//     // Example: You could call an API or handle form submission here
//     console.log('Form submitted with:', { email, password });

//     // Reset the form after submission
//     setEmail('');
//     setPassword('');
//     setErrorMessage('');
//   };

//   return (
//     <div className="login-form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email or Username</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email or username"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <button type="submit" className="submit-btn">Sign In</button>
//       </form>
//       <div className="signup-link">
//         Don't have an account? <a href="/signup">Sign Up</a>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
