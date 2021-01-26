<template>
    <div>
        <SearchForm></SearchForm>
        <ReposList></ReposList>
    </div>
</template>

<script>
    import SearchForm from '../components/SearchForm'
    import ReposList from '../components/ReposList'

    export default {
        components : {
            SearchForm,
            ReposList,
        },
    }
</script>
