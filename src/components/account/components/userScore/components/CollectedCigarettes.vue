<template>
    <div class="collected">
        <h4>Collected cigarette butts</h4>
        <Chart chart-title="Cigarette butts" :collected-butts="butts / 0.1" unit=" points"></Chart>
    </div>
</template>

<script>
    import Chart from "../../../../common/Chart";
    export default {
        name: "CollectedCigarettes",
        components: {Chart},
        data() {
            return {
                butts: 3000
            }
        }
    }
</script>

<style scoped>

</style>
