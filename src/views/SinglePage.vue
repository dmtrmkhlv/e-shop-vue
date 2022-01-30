<template>
    <main class="wrapper">
      <div class="wrapper__top">
        <Header />
        <Nav />
        <Breadcrumbs v-bind:link="getGender"/>
        <ProductSingle v-bind:data="goodById" />
            <section class="items">
                <h2 class="h2">YOU MAY LIKE ALSO</h2>
                <div class="container items__wrapper">
                    <Card v-for="good of goodList" 
                        v-bind:key="good.id" 
                        v-bind:data="good" 
                        v-bind:quantity = "1"
                        v-bind:action="'Add To Cart'" 
                        v-on:action="onAddToCart" />
                </div>
            </section>
      </div>
      <div class="wrapper__bottom">
        <Footer />
      </div>
    </main>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'
  import Search from '@/components/Search.vue'
  import ShowCase from '@/components/ShowCase.vue'
  import Breadcrumbs from '@/components/Breadcrumbs.vue'
  import ProductSingle from '@/components/ProductSingle.vue'
  import Card from '@/components/Card.vue';
  
  export default {
    name: 'SinglePage',
    props: ['data'],
    components: {
      Search,
      ShowCase,
      Header,
      Footer,
      Nav,
      Breadcrumbs,
      ProductSingle,
      Card
    },
    data() {
        return {
        gender: ''
        }
    },
    mounted: function(){
        this.gender = this.$store.getters.getGoodById[0].gender;
    },
    computed:{
        goodById(){
            this.$store.commit('setfindId', this.$route.params.id);
            return this.$store.getters.getGoodById[0];
        },
        goodList(){
            let gender = this.gender;
            return this.$store.getters.getShowCase.filter((good)=>good.gender == gender && good.id_product != this.$route.params.id).slice(0,4);
        },
        getGender(){
            return this.gender;
        },
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods:{
        onAddToCart(good){
            this.$store.dispatch('addToCart', good)
        }
    }
  }
 
</script>