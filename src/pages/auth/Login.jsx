import React, { useState } from "react";
import saveUserToStorage from 'utils/saveUserToStorage.js';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Axios from 'axios';


/**
 * Login
 *
 * @returns {JSX}
 */
const Login = ({ history }) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    Axios.post("https://fast-food-fast.herokuapp.com/api/v1/auth/login", {
      email: email,
      password: password,
    })
    .then(json => {
      saveUserToStorage(json.data.data);
      setTimeout(() => history.push('/posts'), 1000)
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
          <input type="submit" value={loading? "Loading...": "Submit"} />

          <span>Dont have account <Link to="/signup">Signup</Link></span>
        </form>
      </div>
    </>
  );
};

export default Login;
