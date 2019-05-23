import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8cdef9c10c3d5c1672c597b88fa49faefd9a3137faa70c38a7033a257a0c496b'
  }
});