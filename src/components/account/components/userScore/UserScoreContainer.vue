<template>
    <div class="score">
        <ArticleTitle :article-title="'Your score'"></ArticleTitle>
        <SavedMoney></SavedMoney>
        <CollectedCigarettes></CollectedCigarettes>
    </div>
</template>

<script>
    import SavedMoney from "./components/SavedMoney";
    import CollectedCigarettes from "./components/CollectedCigarettes";
    import ArticleTitle from "../../../body/article/components/ArticleTitle";
    export default {
        name: "UserScoreContainer",
        components: {ArticleTitle, CollectedCigarettes, SavedMoney}
    }
</script>

<style scoped>

</style>
