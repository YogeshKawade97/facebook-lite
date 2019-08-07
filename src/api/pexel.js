import axios from 'axios';
const API_KEY = '563492ad6f91700001000001c9a2ca2980774d41adb3b3ca3be333c0';
export default axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    authorization: API_KEY
  },
  params: {
    per_page: 15,
    page: 1
  }
});
