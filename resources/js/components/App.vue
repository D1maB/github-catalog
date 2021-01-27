<template>
    <div>
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from './Nav'
    import SearchForm from './SearchForm'
    import ReposSearchResult from './ReposSearchResult'

    export default {
        components : {
            Nav,
            SearchForm,
            ReposSearchResult,
        },
    }
</script>
