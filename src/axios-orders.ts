import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-generator-cdbeb.firebaseio.com/'
});

export default instance;