<template>
    <div class="item">
        <picture>
            <img :src="path" alt="item">
            <p>{{points}}</p>
        </picture>
    </div>
</template>

<script>
    import ArticleImage from "../../body/article/components/ArticleImage";
    export default {
        name: "Item",
        components: {ArticleImage},
        props: ['imageUrl', 'description'],
        data() {
            return {
                path: this.imageUrl,
                points: this.description + ' points'
            }
        }
    }
</script>

<style scoped>
    img {
        min-width: 320px;
        width: 80%;
        margin: 6px;
    }
</style>
