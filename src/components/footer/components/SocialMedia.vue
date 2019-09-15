<template>
    <div class="social-media">
        <a href="'https://twitter.com/?lang=pl'">
            <font-awesome-icon class="icon" :icon="['fab', 'twitter']" size="2x"/>
        </a>
        <a href="'https://www.facebook.com/'">
            <font-awesome-icon class="icon" :icon="['fab', 'youtube']" size="2x"/>
        </a>
        <a href="'https://www.youtube.com/'">
            <font-awesome-icon class="icon" :icon="['fab', 'facebook']" size="2x"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: "SocialMedia"
    }
</script>

<style scoped>
    .social-media {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        padding-bottom: 20px;
    }
    .icon {
        cursor: pointer;
        color: #ffffff;
        flex: 1;
        width: 20%;
        transition: all 0.4s ease 0s;
    }
    .icon:hover {
        color: #434343;
    }
</style>
