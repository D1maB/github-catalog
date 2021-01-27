import axios from 'axios';

const token = localStorage.getItem('user-token') || '';

const http = axios.create({
    baseURL: 'http://192.168.99.100:5000/api',
    headers: {'Authorization': 'Bearer ' + token}
});

export default class FavoritesAPI{

    static async all(){
        return await http.get('/repos-favorite');
    }

    static async add(data){
        return await http.post('/repos-favorite', data);
    }

    static async destroy(id){
        return await http.delete('/repos-favorite/' + id);
    }
}
