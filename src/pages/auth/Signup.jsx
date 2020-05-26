import React, { useState } from "react";
import saveUserToStorage from 'utils/saveUserToStorage.js';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Axios from 'axios';

/**
 * Signup
 *
 * @returns {JSX}
 */
const Signup = ({ history }) => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    Axios.post("https://fast-food-fast.herokuapp.com/api/v1/auth/signup", {
      name: name,
      email: email,
      password: password,
      role: 'user'
    })
    .then(json => {
      saveUserToStorage(json.data.data);
      setLoading(false);
      setTimeout(() => history.push('/posts'), 1000)
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
          <input type="submit" value={loading? "Loading...": "Submit"} />

          <span>Dont have account <Link to="/login">Login</Link></span>
        </form>
      </div>
    </>
  );
};

export default Signup;
