
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'

import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

import ReposSearchPage from './pages/ReposSearch';
import ReposFavoritesPage from './pages/ReposFavorites'

import AuthService from './auth-service';

import store from './store';

let isAuthenticated = (to, from, next) => {
    if (store.getters['auth/isAuthenticated']) {
        next();
        return;
    }
    next('/login');
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/home',
            name: 'home',
            component: ReposSearchPage,
            beforeEnter: isAuthenticated
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: ReposFavoritesPage,
            beforeEnter: isAuthenticated
        },
    ],
});


// import FavoritesAPI from './favorites-api';

// async function t(){
//
//     const response = await FavoritesAPI.all();
//     console.log(response);
//     console.log(123);
// }
//
// t();

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
