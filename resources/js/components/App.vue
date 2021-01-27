<template>
    <div>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top navbar-laravel">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul v-if="isAuthenticated" class="navbar-nav ml-auto">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">Search repos</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'favorites' }" class="nav-link">Favorites</router-link>
                        </li>
                        <li>
                            <a href="#" @click="logout()" class="nav-link">Logout</a>
                        </li>
                    </ul>
                    <ul v-else="" class="navbar-nav ml-auto">
                        <li>
                            <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="container main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    import store from '../store'
    export default {

        computed: {
            isAuthenticated() {
                return store.getters['auth/isAuthenticated']
            },
        },
        methods: {

            logout() {
                store.dispatch('auth/logout').then(resp => {
                    this.$router.push({name: 'login'})
                })
            }
        },

        created() {
            if(this.isAuthenticated){
                this.$router.push('home')
            }
        }
    }
</script>
