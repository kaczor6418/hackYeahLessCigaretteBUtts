<template>
    <div>
        <div class="userCardInfo" v-for="keyValue in userData">
            <KeyValueLine class="children" :line-key="keyValue.key" :line-value="keyValue.value"></KeyValueLine>
        </div>
    </div>
</template>

<script>
    import ArticleTitle from "../../../body/article/components/ArticleTitle";
    import KeyValueLine from "../../../common/KeyValueLine";
    export default {
        name: "AccountData",
        components: {KeyValueLine, ArticleTitle},
        props: ['userCardData'],
        data() {
            return {
                userData: this.userCardData
            }
        }
    }
</script>

<style scoped>
    .userCardInfo {
        display: flex;
        flex-direction: column;
        height: inherit;
        justify-content: space-around;
    }
    .children {
        flex: 1;
    }
</style>
