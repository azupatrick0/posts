import React, { useState } from "react";
import saveUserToStorage from 'utils/saveUserToStorage.js';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


/**
 * Login
 *
 * @returns {JSX}
 */
const Login = ({ history }) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email)

    fetch("https://taskmanagist.herokuapp.com/api/v1/auth/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: 
        JSON.stringify(email,
        password)
      
    })
    .then(response => response.json())
    .then(json => {
      saveUserToStorage(json);
      history.push('/posts');
    })
    .catch(error => toast.error('User do not exist'))
  }

  return (
    <>
      <div className="auth">
        <div className="header__title">Login</div>
        <form onSubmit={handleSubmit}>
          <input type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <input type="text" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <input type="submit" value="Submit" />

          <span>Dont have account <Link to="/signup">Signup</Link></span>
        </form>
      </div>
    </>
  );
};

export default Login;
