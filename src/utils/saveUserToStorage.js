/**
* save to local storage
* @param user - user data returned from server
* @returns {void}
*/
const saveUserToStorage = (user) => {
  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    const oldUser = JSON.parse(localStorage.getItem('user'));
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify({ ...oldUser, ...user }));
  }
};

export default saveUserToStorage;
