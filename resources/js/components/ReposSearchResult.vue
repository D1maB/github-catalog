<template>
    <div>
        <div v-for="repo in repos" class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ repo.name }}</h5>
                <a class="card-subtitle mb-2 text-muted" :href="repo.html_url" target="_blank">{{ repo.html_url }}</a>
                <p class="card-text">
                    {{ repo.description }} <br> owner: {{ repo.owner.login }} <br> stars: {{ repo.stargazers_count }}
                </p>
                <div @click="addToFavorites(repo.id)" class="btn btn-success card-link">Add to favorites</div>
            </div>
        </div>
    </div>
</template>

<script>
    import EventBus from '../event-bus';
    import FavoritesAPI from "../api/favorites-api";

    export default {
        name: 'ReposSearchResult',

        data() {
            return {
                repos: [],
            }
        },

        mounted() {
            EventBus.$on('reposFetched', (data) => {
                this.updateList(data)
            })
        },

        methods: {
            updateList(data){
                this.repos = data;
            },

            async addToFavorites(id){
                let repo = this.repos.filter(item => item.id === id);

                if(repo){
                    repo = repo[0];

                    try{
                        const response = await FavoritesAPI.add({
                            name: repo.name,
                            html_url: repo.html_url,
                            description: repo.description,
                            owner_login: repo.owner.login,
                            stargazers_count: repo.stargazers_count,
                        });
                        alert(response.data.message);
                    } catch(e){
                        if(e.response.data.message){
                            alert(e.response.data.message);
                        } else{
                            alert('Error: Cannot add to favorites')
                        }
                    }

                    console.log(repo);
                } else{
                    alert('Error: Cannot get the repo.');
                }
            }
        }
    }
</script>
