<template>
    <div class="dataSet">
        <h5 class="children key">{{key}} :</h5>
        <label class="children value">{{value}}</label>
    </div>
</template>

<script>
    export default {
        name: "KeyValueLine",
        props: ['lineKey', 'lineValue'],
        data() {
            return {
                key : this.lineKey,
                value: this.lineValue
            }
        }
    }
</script>

<style scoped>
    .dataSet {
        display: flex;
        flex-direction: row;
        align-content: end;
        align-items: baseline;
        text-align: left;
    }
    .children {
        flex: 1;
    }
    .key {
        padding-right: 2px;
        margin: 4px;
    }
</style>
