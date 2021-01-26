require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import ReposSearchPage from './pages/ReposSearch'
import ReposFavoritesPage from './pages/ReposFavorites'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: ReposSearchPage
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: ReposFavoritesPage,
        },
    ],
});

//Vue.component('app', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
