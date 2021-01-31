import HttpFactory from './http-factory';
const http = HttpFactory.create();

export default class UserAPI{

    static async logout(){
        return await http.post('/logout');
    }

	//me
	
	//reset password
	
	//etc...
}
