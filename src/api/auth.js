export const authenticateUser = (user, token) => {
    return new Promise((resolve, reject) => {
      authUserApi(user, token)
        .then(response => {
          localStorage.setItem('token', response);
          resolve(response);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
};

const authUserApi = (user, token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(user);
        if (user.name === 'Yogesh Kawade' || user.name === 'Michael Rosenthalson') {
          resolve(token);
        } else {
          reject('Login failed');
        }
      });
    }, 2000);
};