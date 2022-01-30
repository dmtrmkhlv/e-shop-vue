<template>
    <Card v-for="good of goodList" 
    v-bind:key="good.id" 
    v-bind:data="good" 
    v-bind:quantity = "1"
    v-bind:action="'Add To Cart'" 
    v-on:action="onAddToCart" />
</template>

<script>
import Card from './Card.vue';
export default {
    props: ['cardCount'],
    components: { Card },
    computed:{
        goodList(){
            if(this.cardCount != 0){
                return this.$store.getters.getShowCase.splice(0, this.cardCount);
            }
            return this.$store.getters.getShowCase;
        }
    },
    methods:{
        onAddToCart(good){
            this.$store.dispatch('addToCart', good)
        }
    }
}
</script>