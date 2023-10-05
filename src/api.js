import axios from 'axios';

const baseLinks = axios.create({
   baseURL: 'http://localhost:3500/',
});

export default baseLinks;
