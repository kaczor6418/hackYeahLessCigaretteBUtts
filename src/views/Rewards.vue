<template>
    <div class="body">
        <HeaderContainer class="children"></HeaderContainer>
        <div class="rewards children" v-for="reward in rewards">
            <Item class="item" :image-url="reward.url" :description="reward.points"></Item>
        </div>
        <FooterContainer class="children"></FooterContainer>
    </div>
</template>

<script>
    import HeaderContainer from "../components/header/HeaderContainer";
    import FooterContainer from "../components/footer/FooterContainer";
    import Item from "../components/account/components/userScore/components/Item";
    export default {
        name: "Rewards",
        components: {Item, FooterContainer, HeaderContainer},
        data() {
            return {
                rewards: [
                    {
                        url: 'https://images.pexels.com/photos/432632/pexels-photo-432632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                        points: 3000
                    },
                    {
                        url: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        points: 2500
                    },
                    {
                        url: 'https://images.pexels.com/photos/54334/running-shoe-shoe-brooks-highly-functional-54334.jpeg?cs=srgb&dl=footwear-shoe-sneakers-54334.jpg&fm=jpg',
                        points: 1234
                    },
                    {
                        url: 'https://images.pexels.com/photos/1371998/pexels-photo-1371998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        points: 583
                    },
                    {
                        url: 'https://images.pexels.com/photos/352808/pexels-photo-352808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        points: 982
                    },
                    {
                        url: 'https://images.pexels.com/photos/1388947/technology-telephone-mobile-smart-1388947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        points: 100
                    }
                ]
            }
        }
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
    .rewards {
        margin-top: 4%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .item {
        flex: 1;
    }
</style>
