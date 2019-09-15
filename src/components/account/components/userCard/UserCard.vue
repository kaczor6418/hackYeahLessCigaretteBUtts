<template>
    <div class="card">
        <AccountAvatar class="children avatar" :avatar="'https://images.pexels.com/photos/2695847/pexels-photo-2695847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"></AccountAvatar>
        <AccountData class="children data" :user-card-data="userData"></AccountData>
        <hr>
    </div>
</template>

<script>
    import AccountAvatar from "./AccountAvatar";
    import AccountData from "./AccountData";
    import KeyValueLine from "../../../common/KeyValueLine";
    export default {
        name: "UserCard",
        components: {KeyValueLine, AccountData, AccountAvatar},
        data() {
            return {
                userData: [
                    {
                        key: 'First name',
                        value: 'Agnieszka'
                    },
                    {
                        key: 'Last name',
                        value: 'Kowalska'
                    },
                    {
                        key: 'Age',
                        value: '23'
                    },
                    {
                        key: 'e-mail',
                        value: 'justyna@gmail.com'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: space-around;
        align-items: center;
    }
    .children {
        flex: 1;
    }
    .avatar {
        flex: 1;
    }
    .data {
        flex: 1;
    }
</style>
