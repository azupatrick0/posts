import jwt from 'jsonwebtoken';

const isAuthenticated = () => {
  const token = JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).token;
    try {
      jwt.verify(token, '@@77fastfoodfast');
      return true;
    } catch (error) {
      return false;
    }
};

export default isAuthenticated;
