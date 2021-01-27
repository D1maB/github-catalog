<template>
    <div class="input-group mb-3">
        <input type="text" id="search-form" class="form-control" v-model="search_input" placeholder="Enter repo name to search.."/>
        <div class="input-group-append">
            <input @click="getRepos" type="button" class="btn btn-primary" value="Search" />
        </div>
    </div>
</template>

<script>
    import GithubSearchAPI from '../github-search-api'
    import EventBus from '../event-bus';

    export default {
        name: 'SearchForm',
        data() {
            return {
                search_input: '',
            }
        },
        methods: {
            async getRepos(){

                let query = this.search_input;
                query = query.trim();

                if(query.length){
                    try{
                        const response = await GithubSearchAPI.searchRepos(query, {per_page: 20});
                        const data = response.data.items;

                        EventBus.$emit('reposFetched', data);

                    } catch (e) {
                        alert('An error occurred..')
                    }
                }
            }
        }
    }
</script>
