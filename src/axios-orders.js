import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9e3fd.firebaseio.com/'
})

export default instance;