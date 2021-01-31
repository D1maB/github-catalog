import HttpFactory from './http-factory';
const http = HttpFactory.create('github');

export default class GithubSearchAPI{

	static async searchRepos(query, params = {}){
        return await http.get('/search/repositories', { params: {
            q: query,
            ...params
        } });
    }
}
