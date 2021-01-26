<template>
    <div>
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from './Nav'
    import SearchForm from './SearchForm'
    import ReposList from './ReposList'

    export default {
        components : {
            Nav,
            SearchForm,
            ReposList,
        },
    }
</script>
