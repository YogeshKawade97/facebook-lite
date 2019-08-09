import axios from 'axios';

// const API_KEY = 'EAAgVAdFl9kMBAMvHHkOyOv223uxCXjlnnLhC90EoLmZAO1A231KRnG5cNwWaRaZBZALNiQjYvsrfEJR8FJnkYLpZCn5uBVp2KZC5Sc8DiB85mElwBVLSPwkSOJ2MBDXAtTolBCIICnZC5vZAAtitt8mJcy2sck4ek2mQbZAVT6vPMc7AUfHjZASDfimWnn1ZCNNYhZAITtZBVzlVn056Y8ViWsFrdBAQsb7DnbsZD';
// console.log(' FB API CALLED ');

export default axios.create({
  baseURL: 'https://graph.facebook.com/',
//   headers: {
//     authorization: API_KEY
//   },
  // params: {
  //   access_token: API_KEY
  // }
});