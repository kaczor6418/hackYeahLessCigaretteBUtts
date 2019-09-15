<template>
    <div class="article">
        <ArticleTitle class="children title" :article-title="articleTitle"></ArticleTitle>
        <ArticleBody class="children body" :body-text="articleBody"></ArticleBody>
        <ArticleImage class="children image" :image-asset="articleImage"></ArticleImage>
    </div>
</template>

<script>
    import ArticleTitle from "./components/ArticleTitle";
    import ArticleBody from "./components/ArticleBody";
    import ArticleImage from "./components/ArticleImage";
    export default {
        name: "ArticleContainer",
        components: {ArticleImage, ArticleBody, ArticleTitle},
        props: ['articleData'],
        data() {
            return {
                articleTitle: this.articleData.title,
                articleBody: this.articleData.body,
                articleImage: this.articleData.image
            }
        }
    }
</script>

<style scoped>
    .article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: space-around;
    }
    .children {
        flex: 1;
    }
</style>
