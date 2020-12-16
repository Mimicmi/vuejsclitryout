<template>
    <!--zone html-->
    <h1 class="w3-animate-left">Hello VUE 3</h1>
    <h2>{{ title }}</h2>
    <img src="../assets/logo.png" alt="">
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                title: "Test titre YOUPI",
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

</style>