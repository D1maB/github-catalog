<template>
    <div>
        <SearchForm></SearchForm>
        <ReposSearchResult></ReposSearchResult>
    </div>
</template>

<script>

    import SearchForm from '../components/SearchForm'
    import ReposSearchResult from '../components/ReposSearchResult'

    export default {
        components : {
            SearchForm,
            ReposSearchResult,
        },
    }
</script>
