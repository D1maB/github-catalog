
import AuthAPI from "./api/auth-api";

export default class AuthService{

    static async login(email, password){
        const response = await AuthAPI.login(email, password);

        const token = response.data.access_token;
        localStorage.setItem('user-token', token);

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    static logout(){
        // ... api call
        localStorage.removeItem('user-token')
    }
}
