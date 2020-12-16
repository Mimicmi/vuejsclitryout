<template>

    <Header>
        <p>This is a slot zone</p>
        <template v-slot:welcome>
            This is a welcome message from the named SLOT
        </template>
    </Header>
    <div>
        <h2>CONTENT avec H2</h2>
    </div>
    <Footer/>

</template>

<script>

    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {
            Footer,
            Header,
        },
        data() {
            return {

            }
        }
    }

</script>

<style>
    @import url("https://www.w3schools.com/w3css/4/w3.css");

</style>
