import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID b451420e668343a6dd1f2676d80958a7768bba3281ac841ec2598051a3298b93'
  }
});
