<template>
    <div class="body">
        <HeaderContainer class="children"></HeaderContainer>
        <RewardsContainer></RewardsContainer>
        <FooterContainer class="children"></FooterContainer>
    </div>
</template>

<script>
    import HeaderContainer from "../components/header/HeaderContainer";
    import FooterContainer from "../components/footer/FooterContainer";
    import RewardsContainer from "../components/rewards/RewardsContainer";
    export default {
        name: "Rewards",
        components: {RewardsContainer, FooterContainer, HeaderContainer}
    }
</script>

<style scoped>
    .body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .children {
        flex: 1;
    }
</style>
