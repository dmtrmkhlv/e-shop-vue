<template>
    <section class="breadcrumbs">
        <div class="container breadcrumbs__box">
            <h2 class="breadcrumbs__title">New Arrivals</h2>
            <nav class="breadcrumbs__links">
                <router-link to="/"  class="breadcrumbs__link">HOME /</router-link>
               <!-- <router-link :to="`${this.link}`" class="breadcrumbs__link">{{this.link.split('/')[0]}}</router-link>
                <span> / </span> -->
               <router-link v-if="this.link" :to="`${this.link}`" class="breadcrumbs__link">{{this.link}} /</router-link>
                <!-- <a href="#" class="breadcrumbs__link">NEW ARRIVALS</a> -->
            </nav>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['link'],
    }
</script>


<style lang="scss">

</style>