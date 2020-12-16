<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>

    <Header>
        <p><i class="fa fa-home"></i>This is a slot zone</p>
        <template v-slot:welcome>
            This is a welcome message from the named SLOT
        </template>
    </Header>

    <div class="w3-container">
        <router-view />
    </div>
    <Footer/>

</template>

<script>

    import Header from "./components/Header";
    import Footer from "./components/Footer";
/*    import Product from "./components/Product";
    import Contact from "./components/Contact";
    import Shop from "./components/Shop";*/

    export default {
        name: 'App',
        components: {
            /*Product,*/
            Footer,
            Header,
/*            Contact,
            Shop*/
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