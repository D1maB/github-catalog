import HttpFactory from './http-factory';
const http = HttpFactory.create('auth');

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
}
