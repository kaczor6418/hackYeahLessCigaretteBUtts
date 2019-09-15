<template>
    <p>{{sectionText}}</p>
</template>

<script>
    export default {
        name: "ArticleBody",
        props: ['bodyText'],
        data() {
            return {
                sectionText: this.bodyText
            };
        }
    }
</script>

<style scoped>
    p {
        margin: 10px 5px 5px 5px;
        text-align: left    ;
    }
</style>
