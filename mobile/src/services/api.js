import Axios from 'axios';

const Api = Axios.create({
        baseURL: 'http://192.168.1.14:3333'
});

export default Api;