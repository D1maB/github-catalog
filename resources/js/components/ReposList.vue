<template>
    <div>
        <div v-for="repo in repos" class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ repo.name }}</h5>
                <a class="card-subtitle mb-2 text-muted" :href="repo.html_url" target="_blank">{{ repo.html_url }}</a>
                <p class="card-text">
                    {{ repo.description }} <br> owner: {{ repo.owner.login }} <br> stars: {{ repo.stargazers_count }}
                </p>
                <a href="#" class="btn btn-success card-link">Add to favorites</a>

<!--                <pre>{{ JSON.stringify(repo) }}</pre>-->
            </div>
        </div>

<!--        <div v-else>No repos were found.</div>-->
    </div>
</template>

<script>
    import EventBus from '../event-bus';

    export default {
        name: 'ReposList',

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
            }
        }
    }
</script>
