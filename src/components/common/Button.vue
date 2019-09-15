<template>
    <div class="button_cont" align="center">
        <router-link class="example_a" :to="redirectPath">{{buttonValue}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: ['buttonContent', 'redirectPath'],
        data() {
            return {
                buttonValue: this.buttonContent,
                buttonLink: this.redirectPath
            };
        }
    }
</script>

<style scoped>
    .example_a {
        color: #fff !important;
        text-transform: uppercase;
        text-decoration: none;
        background: #be2d2a;
        padding: 20px;
        border-radius: 5px;
        display: inline-block;
        border: none;
        transition: all 0.4s ease 0s;
    }
    .example_a:hover {
        background: #434343;
        letter-spacing: 1px;
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
</style>
