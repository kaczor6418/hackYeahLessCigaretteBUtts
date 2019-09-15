<template>
    <picture>
        <img :src="image" alt="'image'">
    </picture>
</template>

<script>
    export default {
        name: "ArticleImage",
        props: ['imageAsset'],
        data() {
            return {
                image: this.imageAsset
            }
        }
    }
</script>

<style scoped>
    img {
        width: 50%;
        margin: 10px;
    }
</style>
