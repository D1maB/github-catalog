<template>
    <div>
        <div v-for="repo in repos" class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ repo.name }}</h5>
                <a class="card-subtitle mb-2 text-muted" :href="repo.html_url" target="_blank">{{ repo.html_url }}</a>
                <p class="card-text">
                    {{ repo.description }} <br> owner: {{ repo.owner.login }} <br> stars: {{ repo.stargazers_count }}
                </p>
                <a @click="addToFavotites(repo.id)" href="#" class="btn btn-success card-link">Add to favorites</a>
            </div>
        </div>
    </div>
</template>

<script>
    import EventBus from '../event-bus';

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

            addToFavorites(id){
                let repo = this.repos.filter(item => item.id === id);

                if(repo){
                    console.log(repo);
                } else{
                    alert('Error: Cannot get the repo.');
                }
            }
        }
    }
</script>
