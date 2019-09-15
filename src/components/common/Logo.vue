<template>
    <router-link :to="'/'">
        <font-awesome-icon class="logo" :icon="['fas', 'home' ]" size="2x"></font-awesome-icon>
    </router-link>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>
    .logo {
        cursor: pointer;
        color: #ffffff;
        transition: all 0.4s ease 0s;
        }
    .logo:hover {
        color: #434343;
    }
</style>
