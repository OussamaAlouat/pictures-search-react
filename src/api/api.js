import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3a206d4d6f404f73ce5e0665c76f2c93d5dce476eaf6e420435f70d56f96fe1a'
  }
})
