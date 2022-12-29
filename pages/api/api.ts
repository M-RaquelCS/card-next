import axios from 'axios';

export const api = axios.create({
 baseURL: 'http://10.26.12.67:5031/',
});