<template>
    <!--zone html-->
    <h1>Hello VUE 3</h1>
    <h2>{{ title }}</h2>
    <img src="../assets/logo.png" alt="">
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                title: "Test titre OMEGALUL",
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style scoped>
    /*zone css, le scoped mets le css QUE pour ce composant*/
    h1 {
        color: red;
    }
</style>