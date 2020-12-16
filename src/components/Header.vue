<template>
    <div>
        <h2>Header</h2>
        <!--Slot est un emplacement vide destiné a recevoir
        quelque chose de l'élément parent donc ici App.vue-->
        <slot></slot>
        <slot name="welcome"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

    h2 {
        color: green;
    }

</style>