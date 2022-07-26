import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333',
  baseURL: 'https://nest-prisma-study.herokuapp.com',
});

export {api};
