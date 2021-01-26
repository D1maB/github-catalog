
import axios from './axios'

export default class GithubSearchAPI{

    static async searchRepos(query, config = {}){
        const response = await axios.get('/search/repositories', { params: {
            q: query,
            sort: config.sort || '',
            order : config.order  || '',
            per_page: config.per_page  || '',
            page: config.page  || ''
        } });

        return response;
    }
}
