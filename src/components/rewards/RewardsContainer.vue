<template>
    <div class="rewards-container">
        <div class="children" v-for="reward in rewards">
            <Item :image-url="reward.url" :description="reward.points"></Item>
        </div>
    </div>
</template>

<script>
    import Item from "./components/Item";
    export default {
        name: "RewardsContainer",
        components: {Item},
        data() {
            return {
                rewards: [
                    {
                        url: 'https://cdn.stocksnap.io/img-thumbs/960w/EXCBJA3FFQ.jpg',
                        points: 3000
                    },
                    {
                        url: 'https://live.staticflickr.com/6205/6152864327_c90f011c33_b.jpg',
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
                    },
                    {
                        url: 'https://cdn.stocksnap.io/img-thumbs/960w/XPGUG6AKFB.jpg',
                        points: 854
                    },
                    {
                        url: 'https://cdn.stocksnap.io/img-thumbs/960w/EC1PNPT1N1.jpg',
                        points: 2345
                    },
                    {
                        url: 'https://live.staticflickr.com/3846/14759215541_925480915f_c.jpg',
                        points: 1432
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .rewards-container {
        display: flex;
        flex-direction: row;
        row-gap: 10px;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .children {
        flex: 1;
        width: 40%;
        margin-top: 4%;
    }
</style>
