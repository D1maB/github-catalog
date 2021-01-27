
// @todo
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.99.100:5000/api/auth',
});

export default class AuthAPI{

    static async login(email, password){
        return await http.post('/login', {
            email,
            password
        });
    }

    static async register(email, password){
        return await http.post('/register', {
            email,
            password
        });
    }

    static async logout(email, password){
        return await http.post('/logout');
    }
}
