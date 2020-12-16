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
    @import url("https://fonts.googleapis.com/css?family=Lato");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}
</style>