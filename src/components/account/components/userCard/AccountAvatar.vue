<template>
    <picture>
        <img :src="avatarPhoto" alt="'avatar'">
    </picture>
</template>

<script>
    export default {
        name: "AccountAvatar",
        props: ['avatar'],
        data() {
            return {
                avatarPhoto: this.avatar
            }
        }
    }
</script>

<style scoped>
    img {
        width: 60%;
        max-height: 5%;
        border-radius: 5%;
        box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.75);
    }

</style>
