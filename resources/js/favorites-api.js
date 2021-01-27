
// @todo
//import axios from './axios'
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.99.100:5000/api';
const api_token = document.head.querySelector('meta[name="api-token"]');

if (api_token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content
}

export default class FavoritesAPI{

    static async all(){
        return await axios.get('/repos-favorite');
    }

    static async add(data){
        return await axios.post('/repos-favorite', {
            data
        });
    }

    static async destroy(id){
        return await axios.delete('/repos-favorite', {
            id
        })
    }
}
