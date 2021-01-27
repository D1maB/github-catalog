<template>
    <div>
        <div v-if="repos.length">
            <div v-for="repo in repos" class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{{ repo.name }}</h5>
                    <a class="card-subtitle mb-2 text-muted" :href="repo.html_url" target="_blank">{{ repo.html_url }}</a>
                    <p class="card-text">
                        {{ repo.description }} <br> owner: {{ repo.owner_login }} <br> stars: {{ repo.stargazers_count }}
                    </p>
                    <div @click="removeFromFavorites(repo.id)" href="#" class="btn btn-danger card-link">Remove from favorites</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EventBus from '../event-bus';
    import FavoritesAPI from "../api/favorites-api";

    export default {
        name: 'ReposListFavorites',

        data() {
            return {
                repos: [],
            }
        },

        async mounted() {
            await this.fetchRepos();
        },

        methods: {

            async fetchRepos(){
                try{
                    const response = await FavoritesAPI.all();
                    const data = response.data;
                    this.updateList(data.data);

                } catch (e) {
                    alert('An error occurred..')
                }
            },

            updateList(data){
                this.repos = data;
            },

            async removeFromFavorites(id){
                //alert(id);

                try{
                    const response = await FavoritesAPI.destroy(id);
                    alert(response.data.message);
                    await this.fetchRepos();

                } catch(e){
                    alert('Error: Cannot remove the repo.');
                }
            }
        }
    }
</script>
