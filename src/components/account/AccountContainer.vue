<template>
    <div class="body">
        <div class="data">
            <ArticleTitle :article-title="'Your data'"></ArticleTitle>
            <UserCard></UserCard>
        </div>
        <hr>
        <UserScoreContainer class="score"></UserScoreContainer>
        <hr>
        <Reword class="reward"></Reword>
    </div>
</template>

<script>
    import ArticleTitle from "../body/article/components/ArticleTitle";
    import UserCard from "./components/userCard/UserCard";
    import UserScoreContainer from "./components/userScore/UserScoreContainer";
    import Reword from "./components/userScore/components/Reword";
    export default {
        name: "AccountContainer",
        components: {Reword, UserScoreContainer, UserCard, ArticleTitle}
    }
</script>

<style scoped>
    .body {

    }
    .data, .score, .reward {
        margin: 6% 0 6% 0;
    }
</style>
