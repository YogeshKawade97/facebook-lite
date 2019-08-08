import axios from 'axios';

const API_KEY = 'EAAMCI8BuacIBAM8ZBIcmCD3LiWZAZAuWpai8SGotuTV2BI7bhBRAdIuhJ2D11q1XrvrxIEmKQ8ZCT87XSME7Oyr5aWYWEi41cPTCkxIieJVBDJUG5ir0CgVcaQB7ngZBuGDMsY5CgCBKdHvJMrjQUNMPjX5DN8STlZC7OZAo2l2CBKtCPtLQfZCdmfgR9hUCkyJZAfHigWr7HbQZDZD';
console.log(' FB API CALLED ');
export default axios.create({
  baseURL: 'https://graph.facebook.com/',
//   headers: {
//     authorization: API_KEY
//   },
  params: {
    access_token: API_KEY
  }
});