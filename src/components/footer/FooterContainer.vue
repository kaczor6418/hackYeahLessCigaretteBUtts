<template>
    <footer>
        <h4 class="children">Follow us</h4>
        <social-media class="children"></social-media>
    </footer>
</template>

<script>
    import SocialMedia from "./components/SocialMedia";
    export default {
        name: "FooterContainer",
        components: {SocialMedia}
    }
</script>

<style scoped>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: space-between;
        background-color: #00a0d4;
        margin-top: 6%;
        width: 100%;
    }
    h4 {
        color: #ffffff;
    }
    .children {
        flex: 1;
    }
</style>
