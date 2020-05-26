import React, { useState } from "react";
import saveUserToStorage from 'utils/saveUserToStorage.js';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

/**
 * Signup
 *
 * @returns {JSX}
 */
const Signup = ({ history }) => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://taskmanagist.herokuapp.com/api/v1/auth/signup", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        name,
        email,
        password
      }
    })
    .then(response => response.json())
    .then(json => {
      saveUserToStorage(json);
      history.push('/posts');
    })
    .catch(error => toast.error('An error occured while signing you up, pleae try again'))
  }

  return (
    <>
      <div className="auth">
        <div className="header__title">Signup</div>
        <form onSubmit={handleSubmit}>
          <input type="text" required placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
          <input type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <input type="text" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <input type="submit" value="Submit" />

          <span>Dont have account <Link to="/login">Login</Link></span>
        </form>
      </div>
    </>
  );
};

export default Signup;
