import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.github.com',
});

export default class GithubSearchAPI{

    static async searchRepos(query, params = {}){
        return await http.get('/search/repositories', { params: {
            q: query,
            ...params
        } });
    }
}
