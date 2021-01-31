import HttpFactory from './http-factory';
const http = HttpFactory.create();

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
