<template>
    <nav class="mb-3">
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'favorites' }">Favorites</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',
    }
</script>
