<template>
    <h2>{{title}}</h2>
</template>

<script>
    export default {
        name: "ArticleTitle",
        props: ['articleTitle'],
        data() {
            return {
                title: this.articleTitle
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: left;
    }
</style>
