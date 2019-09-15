<template>
    <div class="reword">
        <ArticleImage image-asset="https://images.pexels.com/photos/54334/running-shoe-shoe-brooks-highly-functional-54334.jpeg?cs=srgb&dl=footwear-shoe-sneakers-54334.jpg&fm=jpg"></ArticleImage>
        <p>Only 859 points more and you will be able to get it for free</p>
        <Button button-content="Check more" redirect-path="/rewards"></Button>
    </div>
</template>

<script>
    import ArticleImage from "../../../../body/article/components/ArticleImage";
    import Button from "../../../../common/Button";
    export default {
        name: "Reword",
        components: {Button, ArticleImage}
    }
</script>

<style scoped>

</style>
