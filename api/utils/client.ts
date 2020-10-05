import axios from 'axios';

const api = axios.create({
  baseURL: 'https://goehcs.eduro.go.kr',
});

export default api;
