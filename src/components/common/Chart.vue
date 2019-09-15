<template>
    <div class="chart">
        <h5 class="children">{{title}}</h5>
        <div class="children chartBlock"> {{boxes}}</div>
        <h5 class="children">{{ boxes * 0.25 + valueUnit}}</h5>
    </div>
</template>

<script>
    export default {
        name: "Chart",
        props: ['chartTitle','collectedButts', 'unit'],
        data() {
            return {
                title: this.chartTitle,
                boxes: this.collectedButts / 20,
                valueUnit: this.unit
            }
        }
    }
</script>

<style scoped>
    .chart {
        height: 30%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: baseline;
        align-items: baseline;
    }
    .children {
        flex: 1;
    }
    .chartBlock {
        flex: 3;
        width: 60%;
        padding: 2% 0  2% 0;
        color: #ffffff;
        text-align: center;
        vertical-align: middle;
        line-height: inherit;
        background-color: #6c9e30;
    }
</style>
