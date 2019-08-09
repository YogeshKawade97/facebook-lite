export const authenticateUser = (user, token) => {
    return new Promise((resolve, reject) => {      
      authUserApi(user, token)
        .then(response => {
          localStorage.setItem('FBDATA', JSON.stringify(response));
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

        if (user.name === 'Donna Alisonberg' || user.name === 'Saraswati Kawade' || user.name === 'Jayden Aldjdiebjehfa Chaiwitz') {
          let dataStore = {
            'token': token,
            'user': user
          }
          resolve(dataStore);
        } else {
          reject('Login failed');
        }
      });
    }, 2000);
};