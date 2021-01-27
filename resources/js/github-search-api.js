
import axios from './axios'

export default class GithubSearchAPI{

    static async searchRepos(query, params = {}){
        return await axios.get('/search/repositories', { params: {
            q: query,
            ...params
        } });
    }
}
