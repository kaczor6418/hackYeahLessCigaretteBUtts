<template>
    <div class="money">
        <h4>Saved money</h4>
        <Chart chart-title="Boxes" :collected-butts="cigarettes" unit="$"></Chart>
    </div>
</template>

<script>
    import Chart from "../../../../common/Chart";
    export default {
        name: "SavedMoney",
        components: {Chart},
        data() {
            return {
                cigarettes: 3000
            }
        }
    }
</script>

<style scoped>

</style>
